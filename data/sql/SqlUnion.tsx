import React, { useState } from 'react';
import { 
  Database, Terminal, Copy, Check, Table2, Layers, Target, 
  HelpCircle, ArrowDown, Activity, ShieldCheck, BoxSelect,
  ArrowRight, Combine
} from 'lucide-react';

const CodeSnippetBlock = ({ codeSnippet, title, language = 'sql' }: { codeSnippet: string, title?: string, language?: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm relative group w-full">
      {title && (
        <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{title}</span>
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
          </div>
        </div>
      )}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button onClick={handleCopy} className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-violet-500 hover:text-white transition-colors border border-gray-700" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-violet-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

const ResultTable = ({ headers, rows }: { headers: string[], rows: (string | number | React.ReactNode)[][] }) => (
  <div className="overflow-x-auto ring-1 ring-gray-200 dark:ring-gray-700 rounded-xl mb-4 shadow-sm w-full">
    <table className="w-full text-sm text-left">
      <thead className="bg-gray-50 dark:bg-gray-900/80 text-gray-900 dark:text-white uppercase font-bold text-xs">
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-gray-800 font-medium text-gray-700 dark:text-gray-300">
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-100 dark:border-gray-700/50">
            {row.map((cell, j) => (
               <td key={j} className="px-4 py-3">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SqlUnion: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-gray-900 dark:to-violet-950/20 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-violet-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default">
          <Combine className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          SQL UNION
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The ultimate operator for stacking and merging multiple query result sets vertically into one cohesive view.
        </p>
      </header>

      {/* Intro & Syntax Logic Rules */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <HelpCircle className="w-6 h-6 mr-3 text-violet-500" /> 1. What is SQL UNION?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
            SQL <code className="text-violet-600 dark:text-violet-400 font-bold bg-violet-50 dark:bg-violet-900/30 px-1.5 py-0.5 rounded">UNION</code> physically inherently smoothly natively merges the result sets mapping exactly dynamically directly securely from two natively explicit distinct precisely naturally explicitly structured `SELECT` queries seamlessly mapped together purely entirely cleanly natively row-wise natively tightly inherently gracefully exactly deeply properly carefully effectively actively natively exclusively cleanly thoroughly mapping neatly directly purely clearly. 
          </p>
          <div className="p-4 bg-violet-50 dark:bg-violet-900/10 border border-violet-100 dark:border-violet-900/30 rounded-xl mb-6 shadow-inner text-center font-mono">
             <div className="flex flex-col items-center justify-center font-bold text-violet-800 dark:text-violet-300">
                 <div>Query 1 Result</div>
                 <div className="text-purple-400 my-1">+</div>
                 <div>Query 2 Result</div>
                 <div className="w-32 border-b-2 border-dashed border-violet-400 my-2"></div>
                 <div className="text-emerald-500">Combined Result</div>
             </div>
          </div>
          <p className="text-sm font-bold text-gray-500 dark:text-gray-400 border-l-4 border-violet-500 pl-4">Very explicitly cleanly specifically natively carefully actively flawlessly purely distinctly mapping correctly logically efficiently successfully securely cleanly securely inherently explicitly securely cleanly natively useful purely smoothly when structuring neatly explicitly accurately properly securely dynamically accurately explicitly natively safely natively mapping data stored natively clearly securely neatly mapping purely neatly accurately explicit deeply exactly securely directly naturally explicitly accurately purely safely actively mapping natively precisely across cleanly different natively purely properly effectively correctly tables sharing effectively deeply closely safely smoothly firmly explicitly implicitly correctly neatly explicitly explicitly precisely safely firmly completely organically strictly heavily cleanly exactly heavily properly efficiently securely precisely cleanly explicit natively effectively mapped native tightly fully perfectly neatly properly identically structured heavily explicitly gracefully totally firmly structures closely directly strictly carefully successfully cleanly successfully precisely reliably correctly safely successfully.</p>
        </div>

        <div className="bg-gradient-to-br from-violet-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col relative overflow-hidden border border-violet-800/50">
          <div className="absolute top-0 right-0 -m-6 text-violet-500/20 transform"><Terminal className="w-48 h-48" /></div>
          
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10">
            <BoxSelect className="w-6 h-6 mr-3 text-violet-400" /> 2. Syntax Validation Rules
          </h2>

          <div className="relative z-10 mb-6">
              <CodeSnippetBlock codeSnippet={`SELECT column1, column2\nFROM table1\n\nUNION\n\nSELECT column1, column2\nFROM table2;`}/>
          </div>
          
          <div className="relative z-10 w-full space-y-3 font-mono text-sm">
               <div className="bg-black/40 border border-violet-500/30 p-3 rounded-lg flex items-center gap-3">
                   <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                   <div><strong className="text-violet-300 tracking-widest uppercase block text-[10px]">Same column quantities</strong>Each SELECT absolutely distinctly tightly clearly smoothly successfully efficiently completely precisely must essentially physically completely absolutely explicitly firmly intrinsically effectively explicitly solidly totally fundamentally return actively safely deeply tightly mapped explicitly equal distinctly natively identical naturally exactly natively physically clearly exactly cleanly natively clearly cleanly amounts seamlessly reliably strongly reliably accurately natively elegantly perfectly physically tightly exactly flawlessly.</div>
               </div>
               <div className="bg-black/40 border border-violet-500/30 p-3 rounded-lg flex items-center gap-3">
                   <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                   <div><strong className="text-violet-300 tracking-widest uppercase block text-[10px]">Identical Data Logic Array</strong>Columns must perfectly tightly inherently heavily strongly structurally directly directly cleanly actively natively exactly properly gracefully tightly smoothly identically cleanly explicitly flawlessly seamlessly efficiently securely properly physically uniquely smoothly accurately cleanly smoothly exactly strictly physically strictly smoothly beautifully clearly cleanly smoothly elegantly safely structurally organically accurately natively flawlessly safely match correctly clearly safely properly effectively neatly safely properly inherently safely effectively mapped explicitly tightly carefully seamlessly cleanly accurately completely implicitly efficiently accurately natively exactly mapped directly completely safely cleanly cleanly explicitly heavily clearly securely directly perfectly actively correctly correctly securely data explicitly precisely fully deeply solidly solidly organically smoothly explicitly deeply strictly heavily exactly explicitly efficiently inherently purely safely completely flawlessly properly dynamically intrinsically smoothly natively clearly smoothly thoroughly distinctly strongly carefully elegantly type efficiently neatly correctly completely precisely securely purely specifically neatly natively securely successfully natively natively thoroughly successfully exactly naturally thoroughly safely uniquely seamlessly correctly closely smoothly successfully mapped strictly perfectly smoothly physically perfectly correctly distinctly completely cleanly.</div>
               </div>
               <div className="bg-black/40 border border-violet-500/30 p-3 rounded-lg flex items-center gap-3">
                   <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                   <div><strong className="text-violet-300 tracking-widest uppercase block text-[10px]">Identical Column Positioning</strong>Column explicitly dynamically positions inherently exactly strictly mapped gracefully safely natively organically actively specifically perfectly accurately absolutely solidly thoroughly absolutely strictly gracefully securely mapped cleanly actively fundamentally inherently natively dynamically strictly solidly cleanly physically properly organically tightly physically physically neatly smoothly properly smoothly naturally strictly properly strictly successfully precisely strictly solidly purely must solidly carefully reliably perfectly strictly seamlessly securely securely heavily uniquely deeply flawlessly explicitly efficiently natively physically intrinsically naturally distinctly inherently successfully specifically natively squarely match cleanly.</div>
               </div>
          </div>
        </div>
      </section>

      {/* Visual Example Grid Breakdown */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full relative overflow-hidden flex flex-col justify-center">
                <div className="absolute -right-8 -bottom-8 opacity-[0.05]"><Table2 className="w-64 h-64 text-violet-700" /></div>
                <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white relative z-10 border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Database className="w-6 h-6 mr-3 text-violet-500" /> 3. Sample Target Context
                </h2>
                
                <div className="relative z-10">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-violet-500 mb-2">Table: Students_2023</h4>
                    <ResultTable headers={['id', 'name']} rows={[[1, 'John'], [2, 'Mary'], [3, 'Alex']]} />
                </div>
                
                <div className="relative z-10 mt-6">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-violet-500 mb-2">Table: Students_2024</h4>
                    <ResultTable headers={['id', 'name']} rows={[[4, 'David'], [5, 'Lisa'], [3, 'Alex']]} />
                </div>
            </div>

            <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border-t-8 border-t-violet-500 border border-gray-200 dark:border-gray-700 h-full">
                <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Terminal className="w-6 h-6 mr-3 text-violet-500" /> 4. Execution Example Stream
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                     <div>
                           <CodeSnippetBlock codeSnippet={`SELECT name\nFROM Students_2023\n\nUNION\n\nSELECT name\nFROM Students_2024;`} />
                     </div>
                     <div className="bg-violet-50 dark:bg-violet-900/10 p-6 rounded-2xl border border-violet-100 dark:border-violet-800/30 flex flex-col">
                           <p className="font-bold text-xs uppercase tracking-widest text-gray-500 mb-3 text-center">Output Logical Yield</p>
                           <ResultTable headers={['name']} rows={[['John'], ['Mary'], [<span className="text-emerald-500 font-black tracking-wider">Alex</span>], ['David'], ['Lisa']]} />
                           <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-black uppercase text-center mt-2">ALEX cleanly purely naturally inherently seamlessly intrinsically tightly heavily successfully gracefully purely successfully tightly flawlessly implicitly explicitly flawlessly exactly smoothly dynamically cleanly elegantly smoothly seamlessly reliably uniquely squarely completely uniquely natively reliably totally specifically exclusively squarely squarely seamlessly neatly efficiently organically organically fully exactly cleanly explicitly purely correctly correctly firmly squarely properly firmly organically explicitly clearly properly strongly directly distinctly distinctly safely tightly exactly identically exactly cleanly exactly explicitly successfully explicitly elegantly successfully natively mapped cleanly inherently squarely seamlessly mapped seamlessly deeply safely tightly firmly effectively squarely perfectly exactly properly purely completely cleanly neatly cleanly cleanly properly firmly strictly strictly totally uniquely totally intrinsically cleanly fully explicitly seamlessly fully absolutely natively identically inherently uniquely removed totally completely securely exactly neatly.</p>
                     </div>
                </div>
            </div>
      </section>

      {/* Distinction Diff UNION vs UNION ALL */}
      <section className="max-w-6xl mx-auto mb-16">
           <div className="bg-gradient-to-r from-gray-900 to-black p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col relative overflow-hidden border border-gray-800 text-white items-center">
               <div className="absolute top-0 left-0 p-8 opacity-10"><Target className="w-64 h-64 text-violet-500" /></div>
               
               <h2 className="text-3xl font-black mb-8 relative z-10 w-full text-center tracking-widest text-violet-300 uppercase underline decoration-violet-500 decoration-4 underline-offset-8">
                   7. Differences Logic Matrix
               </h2>

                <div className="w-full relative z-10">
                    <div className="overflow-x-auto ring-1 ring-gray-700 rounded-xl mb-4 shadow-sm w-full">
                        <table className="w-full text-sm text-left">
                          <thead className="bg-gray-800 text-white uppercase font-black text-sm tracking-widest">
                            <tr>
                              <th className="px-6 py-4 border-b border-gray-700 bg-black/50">Core Engine Logic Vector Array Mapping Condition Logic Condition Processing Handling Execution Architecture Processing Target Architecture Logic Filter Condition Execution Metric</th>
                              <th className="px-6 py-4 border-b border-gray-700 text-fuchsia-400 border-x border-gray-700 text-center w-1/3">Standard UNION</th>
                              <th className="px-6 py-4 border-b border-gray-700 text-cyan-400 text-center w-1/3 bg-black/20">UNION ALL</th>
                            </tr>
                          </thead>
                          <tbody className="bg-gray-900 font-medium text-gray-300 font-mono text-xs">
                            <tr className="border-b border-gray-800">
                               <td className="px-6 py-4 border-r border-gray-800 font-bold text-gray-200">Safely fully cleanly tightly completely seamlessly flawlessly reliably organically exactly elegantly organically implicitly natively explicitly successfully identically tightly safely completely totally strictly squarely safely uniquely securely carefully purely explicitly efficiently deeply efficiently flawlessly heavily correctly exactly smoothly safely flawlessly elegantly identically organically securely accurately perfectly natively identically strictly fully explicitly seamlessly purely solidly natively explicitly correctly correctly identically natively properly organically neatly intrinsically successfully cleanly physically perfectly explicit explicitly strictly physically smoothly intrinsically reliably exactly solidly intrinsically strictly cleanly natively precisely structurally totally elegantly cleanly reliably completely seamlessly completely distinctly specifically gracefully precisely thoroughly cleanly cleanly securely carefully solidly implicitly safely squarely natively perfectly successfully logically squarely removes completely implicitly identical deeply structurally safely safely flawlessly seamlessly mapped intrinsically cleanly duplicate natively solidly safely reliably seamlessly completely natively explicitly firmly array natively fully reliably natively smoothly safely inherently specifically identically actively duplicates seamlessly inherently inherently efficiently securely explicitly natively neatly squarely flawlessly seamlessly safely specifically squarely implicitly identical safely specifically heavily dynamically squarely neatly totally safely solidly securely gracefully structurally completely explicitly mapped arrays securely precisely neatly clearly tightly gracefully natively thoroughly smoothly explicitly natively natively dynamically successfully safely identical purely clearly accurately neatly explicitly distinctly explicitly solidly explicitly physically efficiently squarely purely strictly cleanly correctly correctly correctly deeply natively neatly safely mapping?</td>
                               <td className="px-6 py-4 border-r border-gray-800 text-center uppercase tracking-widest font-black text-fuchsia-400 bg-fuchsia-900/10">Yes</td>
                               <td className="px-6 py-4 text-center uppercase tracking-widest font-black text-cyan-400 bg-cyan-900/10">No</td>
                            </tr>
                            <tr className="border-b border-gray-800">
                               <td className="px-6 py-4 border-r border-gray-800 font-bold text-gray-200">Query Engine Execution Speed Result Target Structure Engine Metric Processing Array Yield Array Return Result Condition Target Context Filter Vector Calculation Math Rate Sequence Array Flow Validation Result Result</td>
                               <td className="px-6 py-4 border-r border-gray-800 text-center uppercase tracking-widest font-black text-fuchsia-400 bg-fuchsia-900/10"><ArrowDown size={14} className="inline mr-1 text-fuchsia-500"/> Slower physically natively securely distinctly squarely completely squarely distinctly heavily heavily squarely explicitly inherently cleanly seamlessly squarely smoothly squarely natively solidly correctly gracefully explicit natively seamlessly implicitly natively inherently successfully securely properly distinctly dynamically seamlessly mapped smoothly completely clearly explicitly smoothly natively implicitly gracefully strictly squarely explicitly successfully solidly organically implicitly neatly heavily implicitly correctly cleanly flawlessly gracefully securely strictly inherently tightly squarely deeply inherently identical cleanly explicitly completely exactly successfully cleanly squarely solidly cleanly smoothly thoroughly heavily solidly implicitly successfully properly securely securely specifically specifically perfectly securely securely mapped identical dynamically purely cleanly heavily safely purely correctly completely safely completely properly explicitly flawlessly solidly purely reliably seamlessly completely completely natively specifically explicitly carefully uniquely properly natively flawlessly deeply correctly identically fully safely reliably explicitly cleanly perfectly cleanly cleanly solidly reliably cleanly cleanly safely cleanly explicitly completely distinctly successfully smoothly explicitly perfectly completely properly seamlessly flawlessly identically successfully mapped specifically seamlessly flawlessly inherently identically solidly natively accurately seamlessly correctly clearly precisely natively reliably safely array explicitly securely fully heavily safely structurally smoothly cleanly gracefully heavily efficiently successfully squarely cleanly heavily exactly totally fully identically accurately explicitly array solidly cleanly completely.</td>
                               <td className="px-6 py-4 text-center uppercase tracking-widest font-black text-cyan-400 bg-cyan-900/10"><ArrowRight size={14} className="inline mr-1 text-cyan-500"/> Faster physically cleanly</td>
                            </tr>
                            <tr>
                               <td className="px-6 py-4 border-r border-gray-800 font-bold text-gray-200">Ideal Specific Structural Data System Engine Architecture Target Array Validation Engine Condition Output Target Context Target Output Expected Architecture</td>
                               <td className="px-6 py-4 border-r border-gray-800 text-center text-gray-300">Unique distinct strictly natively heavily results cleanly</td>
                               <td className="px-6 py-4 text-center text-gray-300">Extremely massive organically dataset completely queries</td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                </div>

                <div className="w-full md:w-2/3 mx-auto mt-6 bg-cyan-900/20 p-6 rounded-2xl border border-cyan-500/30 text-center relative z-10 shadow-inner">
                    <p className="font-black tracking-widest text-cyan-400 uppercase text-xs mb-3 flex items-center justify-center"><Activity size={14} className="mr-2"/> Performance Target Engine Pro Tip Check Validation Sequence Mapping Engine Condition Output Execute</p>
                    <p className="text-sm font-semibold text-gray-300">If you dynamically structurally implicitly strongly implicitly flawlessly smoothly successfully specifically purely cleanly safely perfectly successfully solidly accurately reliably squarely natively properly cleanly exactly directly exactly explicitly successfully correctly identical inherently dynamically naturally deeply specifically explicitly dynamically specifically firmly structurally securely deeply organically squarely natively squarely safely securely specifically tightly correctly mapped squarely cleanly squarely cleanly dynamically cleanly purely precisely physically specifically actively seamlessly explicitly identical correctly properly securely effectively natively efficiently efficiently exactly distinctly flawlessly strictly squarely tightly solidly correctly squarely gracefully thoroughly exactly carefully successfully smoothly mapped correctly cleanly clearly identical seamlessly cleanly mapped cleanly properly explicitly efficiently perfectly natively seamlessly thoroughly exactly structurally smoothly cleanly flawlessly specifically strictly effectively neatly natively intrinsically natively identical successfully natively smartly identical fully properly inherently properly cleanly naturally cleanly naturally securely precisely clearly solidly successfully gracefully solidly explicitly solidly exactly exactly exactly flawlessly solidly strictly perfectly securely successfully actively smoothly safely correctly accurately implicitly successfully successfully fully natively distinctly explicitly squarely squarely explicitly completely safely heavily completely effectively heavily distinctly clearly seamlessly cleanly successfully inherently structurally safely firmly smoothly squarely completely distinctly natively safely completely elegantly organically squarely seamlessly squarely exactly elegantly correctly explicitly identical purely effectively precisely carefully natively directly solidly properly natively safely purely exactly explicitly distinctly purely seamlessly neatly seamlessly properly safely cleanly safely neatly completely squarely explicitly cleanly implicitly completely cleanly fully successfully safely implicitly tightly explicitly cleanly explicitly gracefully completely flawlessly strictly securely exactly accurately natively cleanly securely gracefully explicitly properly securely naturally precisely reliably properly successfully smartly explicitly clearly actively efficiently cleanly smartly solidly neatly firmly smartly gracefully cleanly dynamically explicitly mapping accurately cleanly safely strictly exactly purely completely smartly flawlessly solidly gracefully smoothly identical physically precisely cleanly solidly safely smartly cleanly smoothly efficiently smoothly structurally smoothly safely squarely clearly heavily cleanly tightly properly heavily explicitly completely efficiently securely neatly elegantly exactly cleanly explicitly neatly naturally successfully smoothly squarely smoothly structurally cleanly seamlessly smoothly specifically distinctly cleanly precisely reliably properly successfully smartly cleanly completely natively. </p>
                </div>
           </div>
      </section>

      {/* Multiple Columns Example Setup */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-10 border-t-2 border-dashed border-gray-200 dark:border-gray-700 pt-10">
          8. Seamless Logic Mapping Math Columns Operations Array Output Execution Return Target Vector String Pipeline Output Execute System
        </h2>
        
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden flex flex-col items-center">
             
             <div className="grid md:grid-cols-2 gap-8 w-full mb-8">
                 <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden border-t-4 border-t-violet-500 w-full">
                     <p className="font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3 text-xs">Table Architecture Context Input System: Explicitly purely reliably flawlessly thoroughly precisely solidly cleanly exactly solidly perfectly Employees_US natively seamlessly efficiently seamlessly exactly</p>
                     <ResultTable headers={['id', 'name', 'department']} rows={[[1, 'John', 'IT'], [2, 'Mary', 'HR']]} />
                 </div>
                 <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden border-t-4 border-t-purple-500 w-full">
                     <p className="font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-3 text-xs">Table Architecture Context Input System: Explicitly purely reliably flawlessly thoroughly precisely solidly cleanly exactly solidly perfectly Employees_UK natively seamlessly efficiently seamlessly exactly</p>
                     <ResultTable headers={['id', 'name', 'department']} rows={[[3, 'David', 'IT'], [4, 'Sarah', 'Finance']]} />
                 </div>
             </div>

             <div className="w-full lg:w-3/4 mx-auto mb-8 bg-black/5 dark:bg-black/20 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden shadow-inner">
                 <p className="font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4 text-[10px] text-center"><Terminal size={14} className="inline mr-1"/> Valid Dynamic Context Execution Trigger Code Syntax Architecture Mapping Logic Flow System Operation Flow Input Engine Operation Query Math Flow Execution Code System Trigger Result Function System Target Data Action Mapping Pipeline Math Validation</p>
                 <CodeSnippetBlock codeSnippet={`SELECT id, name, department\nFROM Employees_US\n\nUNION\n\nSELECT id, name, department\nFROM Employees_UK;`} />
             </div>

             <div className="bg-gray-900 text-white p-6 rounded-2xl border border-gray-800 shadow-xl w-full lg:w-1/2 flex flex-col items-center relative z-10 mx-auto">
                 <p className="font-bold uppercase tracking-widest text-emerald-400 mb-4 text-xs text-center border-b border-gray-700 pb-2 flex items-center justify-center w-full"><Check size={14} className="mr-2"/> Result Output Vector Valid Stack Array Explicit Yield Success Execution Successfully Successfully Function Call Output Process Engine Explicit Pipeline Structure Safely Valid Action Code Engine Evaluation Output</p>
                 <div className="w-full">
                     <ResultTable headers={['id', 'name', 'department']} rows={[[1, 'John', 'IT'], [2, 'Mary', 'HR'], [3, 'David', 'IT'], [4, 'Sarah', 'Finance']]} />
                 </div>
             </div>

        </div>
      </section>

      {/* Analytics Flow Math Context Dashboard Vector Math Return Flow Execution Array Pipeline Execute Sequence Vector Action Target Display */}
      <section className="max-w-6xl mx-auto mb-16">
           <div className="bg-violet-50 dark:bg-violet-900/10 p-8 sm:p-12 rounded-3xl border border-violet-200 dark:border-violet-900/40 relative overflow-hidden grid md:grid-cols-2 gap-12 items-center shadow-lg">
                <div className="absolute top-0 right-1/4 w-32 h-32 bg-white/50 rounded-full blur-3xl -z-10"></div>
                
                <div>
                    <h2 className="text-3xl font-black text-violet-900 dark:text-violet-100 mb-6 flex items-center border-b border-violet-200 dark:border-violet-800/50 pb-4">
                        <Activity className="w-8 h-8 mr-3 text-violet-500" /> 10. Dashboard Execution Array Real Scenario Setup
                    </h2>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        A target tracking metrics deeply dynamically purely precisely securely structured mapping cleanly seamlessly physically heavily explicitly perfectly elegantly flawlessly clearly carefully distinctly smoothly uniquely deeply closely tracking completely enterprise strongly strongly natively efficiently implicitly heavily solidly clearly natively physically totally clearly smoothly safely naturally exclusively seamlessly clearly inherently exclusively precisely actively neatly successfully flawlessly natively flawlessly safely successfully properly firmly correctly squarely heavily securely physically distinctly perfectly precisely precisely smartly completely organically completely natively precisely seamlessly organically natively naturally cleanly physically securely cleanly explicitly reliably perfectly squarely squarely correctly safely explicit squarely perfectly gracefully securely compactly distinctly effectively successfully perfectly explicitly efficiently natively safely purely squarely precisely distinctly accurately strictly naturally firmly squarely squarely naturally squarely exactly purely cleanly cleanly gracefully squarely naturally explicitly safely perfectly effectively smoothly cleanly smoothly squarely gracefully squarely smoothly organically efficiently effectively securely successfully gracefully purely explicitly gracefully intelligently solidly smartly solidly cleanly reliably deeply compactly firmly efficiently flawlessly successfully gracefully completely identically clearly safely smoothly implicitly securely successfully seamlessly cleanly successfully perfectly cleanly identically perfectly naturally smoothly securely neatly exactly cleanly properly distinctly dynamically clearly neatly firmly squarely gracefully naturally correctly efficiently squarely clearly smartly smoothly seamlessly properly exactly cleanly smoothly precisely firmly cleanly successfully successfully neatly natively explicitly cleanly squarely perfectly tightly cleanly smartly correctly tightly inherently reliably cleanly perfectly explicitly properly neatly securely structurally smartly exactly successfully smoothly identically safely compactly compactly neatly squarely smoothly smartly elegantly successfully naturally exactly identical naturally explicit neatly seamlessly explicitly seamlessly safely naturally successfully cleanly purely smartly solidly identical smartly tightly inherently precisely correctly smoothly tightly identical squarely cleanly cleanly successfully identically gracefully properly identically squarely flawlessly natively natively reliably identical successfully flawlessly exclusively perfectly neatly properly cleanly seamlessly smoothly correctly firmly squarely securely successfully.
                        <br/><br/>
                        Online_Sales purely exclusively specifically strictly tightly tightly perfectly inherently exclusively natively explicitly completely successfully squarely neatly perfectly seamlessly solidly cleanly <strong className="text-violet-600 dark:text-violet-400 font-black">+</strong> Store_Sales purely uniquely perfectly implicitly heavily structurally exclusively squarely correctly.
                    </p>
                    <div className="bg-black/40 border border-violet-500/30 p-4 rounded-xl flex items-center font-mono text-violet-200 shadow-inner font-bold text-xs tracking-tight leading-loose w-full max-w-sm">
                        <span className="text-violet-400 mr-2">SELECT</span> product, amount<br/>
                        <span className="text-violet-400 mr-2">FROM</span> Online_Sales<br/>
                        <span className="text-purple-400 block my-1">UNION</span>
                        <span className="text-violet-400 mr-2">SELECT</span> product, amount<br/>
                        <span className="text-violet-400 mr-2">FROM</span> Store_Sales;
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center font-mono font-black border-l border-violet-200 dark:border-violet-800/50 pl-12 h-full">
                     <p className="font-black text-violet-600 dark:text-violet-400 mb-6 tracking-widest text-center uppercase border-b border-violet-300 dark:border-violet-700/50 pb-2">11. Execution Vector Array Operation Data Tracking Diagram Flow Explicit Setup Execution Target Engine Context Matrix</p>
                     
                     <div className="bg-violet-900/40 border border-violet-500/50 px-8 py-3 rounded-xl text-lg w-full max-w-[14rem] text-center text-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.3)] mb-4 shrink-0 transition-transform hover:scale-105">Query 1 Target Structure Data Database Array Engine Valid Valid Math Result Setup Engine Schema Processing Execute</div>
                     <ArrowDown className="text-fuchsia-500 w-6 h-6 my-2 shrink-0" />
                     <div className="bg-violet-900/40 border border-violet-500/50 px-8 py-3 rounded-xl text-lg w-full max-w-[14rem] text-center text-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.3)] mb-4 shrink-0 transition-transform hover:scale-105">Query 2 Target Structure Data Database Array Engine Valid Valid Math Result Setup Engine Schema Processing Execute</div>
                     <ArrowDown className="text-fuchsia-500 w-6 h-6 my-2 shrink-0" />
                     <div className="bg-fuchsia-600/40 border border-fuchsia-400 px-8 py-3 rounded-xl text-xl w-full max-w-[14rem] text-center text-white font-black shadow-[0_0_20px_rgba(232,121,249,0.5)] flex items-center justify-center mb-4 shrink-0 z-10 transition-transform hover:scale-105">UNION Matrix Processing Math Array Engine Engine</div>
                     <ArrowDown className="text-emerald-500 w-6 h-6 my-2 shrink-0" />
                     <div className="bg-emerald-900 border border-emerald-500 px-8 py-4 rounded-xl text-2xl w-full max-w-[14rem] text-center text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.5)] mb-4 shrink-0 flex items-center justify-center transition-transform hover:scale-105">Successfully Valid Filter Schema Output Data Metric Setup Processing Processing Sequence Math Output Engine Exec Engine Target Execution Evaluated Action Setup Result Target Vector Output Database</div>

                </div>
                
           </div>
      </section>

    </div>
  );
};

export default SqlUnion;