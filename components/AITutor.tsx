import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Settings, Sparkles, Key, Bot, User, ChevronDown } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface AITutorProps {
  courseId: string;
  topicId: string;
}

const STORAGE_KEY = 'knowgrow_ai_api_key';

const TypingIndicator = () => (
  <div className="flex space-x-1.5 p-2 items-center h-8">
    <motion.div className="w-2 h-2 bg-brand-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
    <motion.div className="w-2 h-2 bg-brand-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
    <motion.div className="w-2 h-2 bg-brand-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
  </div>
);

const AITutor: React.FC<AITutorProps> = ({ courseId, topicId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const safeCourseId = courseId || 'General';
  const safeTopicId = topicId || 'Overview';

  const initialGreeting = `Hi there! I am your AI Tutor. I can see you are currently studying **${safeCourseId.toUpperCase()}** (Topic: \`${safeTopicId}\`). How can I help you with this material today?`;

  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: initialGreeting }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedKey = localStorage.getItem(STORAGE_KEY);
    if (savedKey) setApiKey(savedKey);
  }, []);

  // Update greeting when topic changes (if no history)
  useEffect(() => {
    if (messages.length <= 1) {
      setMessages([{ role: 'assistant', content: `Hi there! I am your AI Tutor. I can see you are currently studying **${safeCourseId.toUpperCase()}** (Topic: \`${safeTopicId}\`). How can I help you with this material today?` }]);
    }
  }, [safeCourseId, safeTopicId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSaveKey = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem(STORAGE_KEY, apiKey);
    setIsSettingsOpen(false);
  };

  const handleClearHistory = () => {
    setMessages([{ role: 'assistant', content: `Context cleared. I'm ready to help you with **${safeCourseId.toUpperCase()}** - \`${safeTopicId}\`.` }]);
  };

  const executeQuery = async (userMsg: string) => {
    if (!userMsg.trim() || !apiKey) return;
    
    const newMessages: Message[] = [...messages, { role: 'user', content: userMsg }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const isGroq = apiKey.startsWith('gsk_');
      const endpoint = isGroq ? 'https://api.groq.com/openai/v1/chat/completions' : 'https://api.openai.com/v1/chat/completions';
      const model = isGroq ? 'llama3-70b-8192' : 'gpt-3.5-turbo';

      const systemPrompt: Message = {
        role: 'system',
        content: `You are a friendly, highly intelligent programming tutor for an LMS called KnowGrow. 
The student is currently reading a tutorial on ${safeCourseId.toUpperCase()}, specifically the section: ${safeTopicId}. 
Be highly educational, encouraging, and format your responses clearly using Markdown. Do not give overly long walls of text. Be conversational.`
      };

      const conversationToSend = [
        systemPrompt,
        ...newMessages.filter(m => m.role !== 'system')
      ];

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: model,
          messages: conversationToSend,
          temperature: 0.7,
          max_tokens: 1000
        })
      });

      if (!res.ok) {
        throw new Error(`API Error: ${res.status}`);
      }

      const data = await res.json();
      const aiResponse = data.choices[0].message.content;

      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);

    } catch (error: any) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: `⚠️ Sorry, I encountered an error connecting to the API. Please check your API key and try again.\n\n\`${error.message}\`` }]);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const currentInput = input;
    setInput('');
    await executeQuery(currentInput);
  };

  const triggerQuickAction = async (prompt: string) => {
    await executeQuery(prompt);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-brand-500 via-indigo-500 to-purple-600 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)] flex items-center justify-center text-white transition-all overflow-hidden group"
            aria-label="Open AI Tutor"
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Sparkles className="w-8 h-8 absolute animate-pulse opacity-50 text-yellow-200 top-1 right-2" />
            <Bot className="w-8 h-8 relative z-10" />
            
            {/* Notification Dot */}
            <span className="absolute top-0 right-0 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-[95vw] md:w-[420px] h-[600px] max-h-[85vh] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/20 dark:border-slate-700/50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 p-5 text-white shadow-lg z-20 shrink-0">
              {/* Decorative background shapes */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-16 translate-x-10 pointer-events-none"></div>
              
              <div className="flex justify-between items-center relative z-10">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-400 border-2 border-brand-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg leading-tight tracking-tight">KnowGrow AI</h3>
                    <p className="text-xs text-brand-100 font-medium flex items-center opacity-90">
                      <Sparkles className="w-3 h-3 mr-1 text-yellow-300" /> Topic Specific Tutor
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                    className={`p-2 rounded-full transition-all duration-300 ${isSettingsOpen ? 'bg-white/30 rotate-90 ' : 'hover:bg-white/20'}`}
                    title="Settings"
                  >
                    <Settings className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/20 rounded-full transition-all duration-300 hover:rotate-90"
                    title="Close"
                  >
                    <ChevronDown className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Settings Overlay */}
            <AnimatePresence>
              {isSettingsOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 p-5 z-20 overflow-hidden shadow-inner relative"
                >
                  <form onSubmit={handleSaveKey}>
                    <label className="block text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">
                      LLM Authorization Key
                    </label>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="relative flex-1 group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors group-focus-within:text-brand-500">
                          <Key className="h-4 w-4 text-slate-400" />
                        </div>
                        <input
                          type="password"
                          value={apiKey}
                          onChange={(e) => setApiKey(e.target.value)}
                          placeholder="gsk_... or sk-..."
                          className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all shadow-sm"
                        />
                      </div>
                      <button type="submit" className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2.5 rounded-xl text-sm font-bold shadow-md hover:scale-105 active:scale-95 transition-transform">
                        Save
                      </button>
                    </div>
                    <div className="flex justify-between items-center px-1">
                      <p className="text-[10px] text-slate-400 font-medium">Key stored locally in browser.</p>
                      <button type="button" onClick={handleClearHistory} className="text-xs text-rose-500 font-bold hover:underline">Clear Chat History</button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-slate-50/50 dark:bg-slate-900/50 scroll-smooth relative">
              
              {!apiKey && !isSettingsOpen && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200/50 dark:border-amber-700/30 rounded-2xl p-6 text-center shadow-sm relative overflow-hidden my-4 mx-2"
                >
                  <div className="absolute -right-4 -top-4 opacity-10">
                    <Key className="w-24 h-24 text-amber-500" />
                  </div>
                  <div className="relative z-10 border border-dashed border-amber-300 dark:border-amber-700 rounded-xl p-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                     <Key className="w-10 h-10 mx-auto text-amber-500 mb-3" />
                     <p className="text-sm text-amber-900 dark:text-amber-200 mb-4 font-bold">API Key Required</p>
                     <p className="text-xs text-amber-700 dark:text-amber-400 mb-4">You need to configure an OpenAI or Groq API key to start chatting securely in your browser.</p>
                     <button onClick={() => setIsSettingsOpen(true)} className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-xl text-xs font-bold shadow-md transition-all active:scale-95 w-full">
                       Open Settings
                     </button>
                  </div>
                </motion.div>
              )}

              {/* Messages Mapping */}
              {messages.filter(m => m.role !== 'system').map((msg, idx) => {
                const isUser = msg.role === 'user';
                return (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${isUser ? 'justify-end' : 'justify-start'} group`}
                  >
                    {!isUser && (
                       <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-500 to-purple-500 mr-2 flex items-center justify-center shrink-0 mt-1 shadow-sm">
                         <Bot className="w-4 h-4 text-white" />
                       </div>
                    )}
                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-[15px] leading-relaxed shadow-sm ${
                      isUser 
                        ? 'bg-gradient-to-br from-brand-600 to-indigo-600 text-white rounded-tr-sm' 
                        : 'bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-tl-sm'
                    }`}>
                      {!isUser ? (
                          <div className="prose dark:prose-invert prose-sm max-w-none prose-p:leading-snug prose-pre:bg-slate-900 prose-pre:text-slate-300 prose-pre:p-3 prose-pre:rounded-xl prose-pre:border prose-pre:border-slate-700/50 prose-code:text-brand-600 dark:prose-code:text-brand-400">
                            <ReactMarkdown>{msg.content}</ReactMarkdown>
                          </div>
                      ) : (
                        <p className="whitespace-pre-wrap">{msg.content}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
              
              {/* Quick Actions if only greeting exists */}
              {messages.length === 1 && apiKey && !isSettingsOpen && (
                 <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-2 pt-4 px-2"
                 >
                    <p className="w-full text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 ml-1">Quick Actions</p>
                    <button onClick={() => triggerQuickAction("Explain this concept like I'm 5 years old.")} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium px-3 py-1.5 rounded-full hover:border-brand-500 hover:text-brand-600 transition-colors shadow-sm">
                      Explain Simply
                    </button>
                    <button onClick={() => triggerQuickAction("Show me a code example mapping to this topic.")} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium px-3 py-1.5 rounded-full hover:border-brand-500 hover:text-brand-600 transition-colors shadow-sm">
                      Show Code Example
                    </button>
                    <button onClick={() => triggerQuickAction("Quiz me on this topic with 3 questions.")} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium px-3 py-1.5 rounded-full hover:border-brand-500 hover:text-brand-600 transition-colors shadow-sm">
                      Quiz Me
                    </button>
                 </motion.div>
              )}

              {isLoading && (
                <div className="flex justify-start">
                   <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-500 to-purple-500 mr-2 flex items-center justify-center shrink-0 mt-1 shadow-sm opacity-70">
                     <Bot className="w-4 h-4 text-white" />
                   </div>
                  <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-800 rounded-2xl rounded-tl-sm shadow-sm flex items-center px-4">
                    <TypingIndicator />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={sendMessage} className="p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800/80 z-20 shrink-0 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
              <div className="relative flex items-center bg-slate-100/80 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 focus-within:border-brand-400 focus-within:ring-2 focus-within:ring-brand-500/20 transition-all overflow-hidden p-1 shadow-inner">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={apiKey ? "Type your question..." : "Please configure API setting..."}
                  disabled={isLoading || !apiKey}
                  className="w-full bg-transparent py-2.5 pl-4 pr-12 text-[15px] focus:outline-none dark:text-white disabled:opacity-50 font-medium placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading || !apiKey}
                  className="absolute right-1.5 p-2 bg-brand-600 text-white rounded-xl hover:bg-brand-500 disabled:opacity-50 disabled:bg-slate-300 dark:disabled:bg-slate-700 transition-all flex items-center justify-center h-10 w-10 active:scale-95 shadow-md disabled:shadow-none"
                >
                  <Send className="w-5 h-5 ml-0.5" />
                </button>
              </div>
              <div className="text-center mt-2">
                <p className="text-[9px] text-slate-400 font-medium tracking-wide uppercase">AI can make mistakes. Verify critical code.</p>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AITutor;
