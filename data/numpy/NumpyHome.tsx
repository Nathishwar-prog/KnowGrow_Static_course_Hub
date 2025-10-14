import React from 'react';

function NumpyHome() {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mastering NumPy: A Visual Infographic</title>
  <link
    rel="icon"
    type="image/svg+xml"
    href="https://upload.wikimedia.org/wikipedia/commons/5/5f/NumPy_logo_2020.svg"
  />
  {/* Fallback for browsers that prefer .ico */}
  <link
    rel="alternate icon"
    type="image/png"
    href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/NumPy_logo_2020.svg/32px-NumPy_logo_2020.svg.png"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Source+Code+Pro:wght@400;600&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            font-family: 'Inter', sans-serif;\n            background-color: #111827; /* bg-gray-900 */\n            color: #d1d5db; /* text-gray-300 */\n        }\n        .font-code {\n            font-family: 'Source Code Pro', monospace;\n        }\n        .gradient-text {\n            background: linear-gradient(to right, #4ade80, #38bdf8);\n            -webkit-background-clip: text;\n            -webkit-text-fill-color: transparent;\n        }\n        .card {\n            background-color: #1f2937; /* bg-gray-800 */\n            border: 1px solid #374151; /* border-gray-700 */\n            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\n        }\n        .card:hover {\n            transform: translateY(-5px);\n            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1);\n        }\n        .visual-box {\n            border: 2px dashed #4b5563; /* border-gray-600 */\n            background-color: #111827; /* bg-gray-900 */\n            min-height: 50px;\n        }\n        .visual-item {\n            background-color: #374151; /* bg-gray-700 */\n            border: 1px solid #6b7280; /* border-gray-500 */\n            color: #f9fafb; /* text-gray-50 */\n        }\n        .arrow {\n            color: #6b7280; /* text-gray-500 */\n        }\n        .tag {\n            background-color: #374151;\n            color: #a5f3fc;\n            display: inline-block;\n            padding: 2px 8px;\n            border-radius: 9999px;\n            font-size: 0.75rem;\n            font-weight: 600;\n        }\n        .section-divider {\n            height: 2px;\n            background: linear-gradient(to right, #1f2937, #4ade80, #38bdf8, #1f2937);\n            margin: 4rem 0;\n        }\n    "
    }}
  />
  {/* Header */}
  <header
    id="home"
    className="text-center py-12 md:py-20 bg-slate-900 border-b border-slate-800"
  >
    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
      Mastering <span className="gradient-text">NumPy</span>
    </h1>
    <p className="mt-4 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
      An interactive infographic for the 80/20 of numerical computing in Python.
    </p>
    {/* Redesigned Button Container */}
    <div className="mt-10 max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-3 px-4">
      {/* Master Reference Button */}
      <button
        onclick="document.getElementById('master-reference').scrollIntoView({ behavior: 'smooth' });"
        className="flex items-center gap-2 bg-sky-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-sky-500 transform hover:-translate-y-1 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
        <span>Master Reference</span>
      </button>
      {/* Learning Path Button */}
      <button
        onclick="document.getElementById('learning-path').scrollIntoView({ behavior: 'smooth' });"
        className="flex items-center gap-2 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-500 transform hover:-translate-y-1 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <span>Learning Path</span>
      </button>
      {/* Search Function Button */}
      <button
        onclick="document.getElementById('quick-reference').scrollIntoView({ behavior: 'smooth' });"
        className="flex items-center gap-2 bg-slate-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-slate-600 transform hover:-translate-y-1 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx={11} cy={11} r={8} />
          <line x1={21} y1={21} x2="16.65" y2="16.65" />
        </svg>
        <span>Search</span>
      </button>
      {/* Grouped Function Buttons */}
      <button
        onclick="document.getElementById('critical-functions').scrollIntoView({ behavior: 'smooth' });"
        className="flex items-center gap-2 bg-slate-800 text-slate-300 font-medium px-4 py-2 rounded-lg hover:bg-slate-700 hover:text-white transition-colors duration-200"
      >
        Critical
      </button>
      <button
        onclick="document.getElementById('important-functions').scrollIntoView({ behavior: 'smooth' });"
        className="flex items-center gap-2 bg-slate-800 text-slate-300 font-medium px-4 py-2 rounded-lg hover:bg-slate-700 hover:text-white transition-colors duration-200"
      >
        Important
      </button>
      <button
        onclick="document.getElementById('utility-functions').scrollIntoView({ behavior: 'smooth' });"
        className="flex items-center gap-2 bg-slate-800 text-slate-300 font-medium px-4 py-2 rounded-lg hover:bg-slate-700 hover:text-white transition-colors duration-200"
      >
        Utility
      </button>
      {/* Grouped Concept Buttons */}
      <button
        onclick="document.getElementById('array-creation').scrollIntoView({ behavior: 'smooth' });"
        className="flex items-center gap-2 bg-slate-800 text-slate-300 font-medium px-4 py-2 rounded-lg hover:bg-slate-700 hover:text-white transition-colors duration-200"
      >
        Creation
      </button>
      <button
        onclick="document.getElementById('indexing-concepts').scrollIntoView({ behavior: 'smooth' });"
        className="flex items-center gap-2 bg-slate-800 text-slate-300 font-medium px-4 py-2 rounded-lg hover:bg-slate-700 hover:text-white transition-colors duration-200"
      >
        Indexing
      </button>
      <button
        onclick="document.getElementById('slicing-concepts').scrollIntoView({ behavior: 'smooth' });"
        className="flex items-center gap-2 bg-slate-800 text-slate-300 font-medium px-4 py-2 rounded-lg hover:bg-slate-700 hover:text-white transition-colors duration-200"
      >
        Slicing
      </button>
      <button
        onclick="document.getElementById('mathematical-operations').scrollIntoView({ behavior: 'smooth' });"
        className="flex items-center gap-2 bg-slate-800 text-slate-300 font-medium px-4 py-2 rounded-lg hover:bg-slate-700 hover:text-white transition-colors duration-200"
      >
        Math Ops
      </button>
    </div>
  </header>
  {/* GitHub Suggestion Button */}
  <a
    href="https://github.com/Nathishwar-prog"
    target="_blank"
    title="Suggest an Improvement"
    className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-gray-600"
  >
    {/* GitHub Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="currentColor"
      className="bi bi-github"
      viewBox="0 0 16 16"
    >
      <path
        d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 
  0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
  -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2
  -3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1
  0 0 .67-.21 2.2.82a7.63 7.63 0 012 0c1.53-1.03 2.2-.82 2.2-.82.44 
  1.09.16 1.9.08 2.1.51.56.82 1.27.82 2.15 0 3.07-1.87 
  3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 
  2.2 0 .21.15.46.55.38A8.001 8.001 0 008 0z"
      />
    </svg>
    <span className="hidden sm:inline">Suggest</span>
  </a>
  {/* Back to Top Button */}
  <button
    id="back-to-top"
    onclick="document.getElementById('home').scrollIntoView({ behavior: 'smooth' });"
    title="Go to top"
    className="fixed bottom-8 right-8 z-50 p-3 bg-sky-600 text-white rounded-full shadow-lg hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-sky-500 hide-btn"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-arrow-up"
    >
      <line x1={12} y1={19} x2={12} y2={5} />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  </button>
  <main className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* ======================================================================= */}
    {/* ============= START: Master Reference Table Section =================== */}
    {/* ======================================================================= */}
    <section id="master-reference" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">
          NumPy Master Reference Table
        </h2>
        <p className="mt-2 text-gray-400">
          Your quick lookup guide. Click any function to go directly to the
          official NumPy documentation.
        </p>
      </div>
      {/* Reference Table */}
      <div className="max-w-7xl mx-auto bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table id="referenceTable" className="min-w-full text-left">
            <thead className="bg-gray-900">
              <tr>
                <th className="p-4 font-semibold text-sky-400 w-1/5">
                  Category
                </th>
                <th className="p-4 font-semibold text-green-400 w-2/5">
                  Core / Must-Know Functions
                </th>
                <th className="p-4 font-semibold text-amber-400 w-2/5">
                  Other Useful Functions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {/* Array Creation & Basics */}
              <tr className="hover:bg-gray-700/50">
                <td className="p-4 font-bold text-white align-top">
                  Array Creation &amp; Basics
                </td>
                <td className="p-4 align-top">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.array.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.array
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.arange.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.arange
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.linspace.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.linspace
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.zeros.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.zeros
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.ones.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.ones
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.eye.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.eye
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.empty.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.empty
                    </a>
                  </div>
                </td>
                <td className="p-4 align-top">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.full.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.full
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.frombuffer.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.frombuffer
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.fromfile.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.fromfile
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/random/generated/numpy.random.random.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.random.random
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/random/generated/numpy.random.randn.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.random.randn
                    </a>
                  </div>
                </td>
              </tr>
              {/* Array Properties & Manipulation */}
              <tr className="hover:bg-gray-700/50">
                <td className="p-4 font-bold text-white align-top">
                  Properties &amp; Manipulation
                </td>
                <td className="p-4 align-top">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.ndarray.shape.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      .shape
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.ndarray.dtype.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      .dtype
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.ndarray.ndim.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      .ndim
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.reshape.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.reshape
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.ndarray.flatten.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      .flatten
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.ravel.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.ravel
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.transpose.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.transpose
                    </a>
                  </div>
                </td>
                <td className="p-4 align-top">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.swapaxes.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.swapaxes
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.rollaxis.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.rollaxis
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.expand_dims.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.expand_dims
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.squeeze.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.squeeze
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.broadcast_to.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.broadcast_to
                    </a>
                  </div>
                </td>
              </tr>
              {/* Indexing, Slicing & Masking */}
              <tr className="hover:bg-gray-700/50">
                <td className="p-4 font-bold text-white align-top">
                  Indexing &amp; Slicing
                </td>
                <td className="p-4 align-top">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://numpy.org/doc/stable/user/basics.indexing.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      Basic Slicing
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/user/basics.indexing.html#boolean-array-indexing"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      Boolean Masking
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.where.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.where
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/user/basics.indexing.html#integer-array-indexing"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      Fancy Indexing
                    </a>
                  </div>
                </td>
                <td className="p-4 align-top">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.take.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.take
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.choose.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.choose
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/maskedarray.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      Masked Arrays (np.ma)
                    </a>
                  </div>
                </td>
              </tr>
              {/* Universal Functions */}
              <tr className="hover:bg-gray-700/50">
                <td className="p-4 font-bold text-white align-top">
                  Math (ufuncs)
                </td>
                <td className="p-4 align-top">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.sin.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.sin
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.exp.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.exp
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.log.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.log
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.sqrt.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.sqrt
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.add.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.add
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.subtract.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.subtract
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.multiply.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.multiply
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.divide.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.divide
                    </a>
                  </div>
                </td>
                <td className="p-4 align-top">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.log1p.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.log1p
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.expm1.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.expm1
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.lcm.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.lcm
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.gcd.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.gcd
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.sinc.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.sinc
                    </a>
                  </div>
                </td>
              </tr>
              {/* Rounding */}
              <tr className="hover:bg-gray-700/50">
                <td className="p-4 font-bold text-white align-top">
                  Rounding &amp; Floating-Point
                </td>
                <td className="p-4 align-top">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.floor.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.floor
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.ceil.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.ceil
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.trunc.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.trunc
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.round.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.round
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.rint.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.rint
                    </a>
                  </div>
                </td>
                <td className="p-4 align-top">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.fix.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.fix
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.copysign.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.copysign
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.nextafter.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.nextafter
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.spacing.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.spacing
                    </a>
                  </div>
                </td>
              </tr>
              {/* Aggregation */}
              <tr className="hover:bg-gray-700/50">
                <td className="p-4 font-bold text-white align-top">
                  Aggregation &amp; Reduction
                </td>
                <td className="p-4 align-top">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.sum.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.sum
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.mean.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.mean
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.min.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.min
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.max.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.max
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.std.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.std
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.var.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.var
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.argmin.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.argmin
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.argmax.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.argmax
                    </a>
                  </div>
                </td>
                <td className="p-4 align-top">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.cumsum.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.cumsum
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.cumprod.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.cumprod
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.nansum.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.nansum
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.nanmean.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.nanmean
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.ptp.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.ptp
                    </a>
                  </div>
                </td>
              </tr>
              {/* Linear Algebra */}
              <tr className="hover:bg-gray-700/50">
                <td className="p-4 font-bold text-white align-top">
                  Linear Algebra
                </td>
                <td className="p-4 align-top">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.dot.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.dot
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.matmul.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.matmul
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.linalg.inv.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.linalg.inv
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.linalg.det.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.linalg.det
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.linalg.eig.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.linalg.eig
                    </a>
                  </div>
                </td>
                <td className="p-4 align-top">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.linalg.pinv.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.linalg.pinv
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.linalg.svd.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.linalg.svd
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.trace.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.trace
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.tensordot.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.tensordot
                    </a>
                  </div>
                </td>
              </tr>
              {/* Sorting & Searching */}
              <tr className="hover:bg-gray-700/50">
                <td className="p-4 font-bold text-white align-top">
                  Sorting &amp; Searching
                </td>
                <td className="p-4 align-top">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.sort.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.sort
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.argsort.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.argsort
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.unique.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.unique
                    </a>
                  </div>
                </td>
                <td className="p-4 align-top">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.searchsorted.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.searchsorted
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.partition.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.partition
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.argpartition.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.argpartition
                    </a>
                  </div>
                </td>
              </tr>
              {/* Random Number Generation */}
              <tr className="hover:bg-gray-700/50">
                <td className="p-4 font-bold text-white align-top">
                  Random Numbers
                </td>
                <td className="p-4 align-top">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://numpy.org/doc/stable/reference/random/generated/numpy.random.seed.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.random.seed
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/random/generated/numpy.random.rand.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.random.rand
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/random/generated/numpy.random.randn.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.random.randn
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/random/generated/numpy.random.choice.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.random.choice
                    </a>
                  </div>
                </td>
                <td className="p-4 align-top">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://numpy.org/doc/stable/reference/random/generated/numpy.random.shuffle.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.random.shuffle
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/random/generated/numpy.random.permutation.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.random.permutation
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/random/generated/numpy.random.multinomial.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.random.multinomial
                    </a>
                  </div>
                </td>
              </tr>
              {/* I/O */}
              <tr className="hover:bg-gray-700/50">
                <td className="p-4 font-bold text-white align-top">
                  Input / Output
                </td>
                <td className="p-4 align-top">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.load.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.load
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.save.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.save
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.savetxt.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.savetxt
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.loadtxt.html"
                      target="_blank"
                      className="tag hover:bg-green-600"
                    >
                      np.loadtxt
                    </a>
                  </div>
                </td>
                <td className="p-4 align-top">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.genfromtxt.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.genfromtxt
                    </a>
                    <a
                      href="https://numpy.org/doc/stable/reference/generated/numpy.recfromcsv.html"
                      target="_blank"
                      className="tag hover:bg-amber-600"
                    >
                      np.recfromcsv
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Direct Links */}
      <div className="mt-12 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-sky-400 mb-4">
          Direct Links to Documentation
        </h3>
        <div className="text-left bg-gray-800 border border-gray-700 rounded-lg p-6 space-y-3">
          <p>
            <a
              href="https://numpy.org/doc/stable/reference/"
              target="_blank"
              className="text-green-400 hover:text-green-300 font-semibold"
            >
              NumPy Reference Manual →
            </a>
            <span className="text-gray-400 block text-sm">
              The top-level page for all functions and modules.
            </span>
          </p>
          <p>
            <a
              href="https://numpy.org/doc/stable/reference/routines.math.html"
              target="_blank"
              className="text-green-400 hover:text-green-300 font-semibold"
            >
              Mathematical Functions Routines →
            </a>
            <span className="text-gray-400 block text-sm">
              Detailed section on trigonometry, exponents, logs, rounding, etc.
            </span>
          </p>
        </div>
      </div>
    </section>
    {/* ======================================================================= */}
    {/* ============== END: Master Reference Table Section ==================== */}
    {/* ======================================================================= */}
    {/* Important & Utility Functions */}
    <section id="other-functions" className="py-12">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Important Functions */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            Important Functions{" "}
            <span className="text-lg font-semibold text-amber-400">
              (Supporting Roles)
            </span>
          </h2>
          <p className="mt-2 text-gray-400">
            Frequently used to support the critical functions.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="tag">abs()</span>
            <span className="tag">add()</span>
            <span className="tag">multiply()</span>
            <span className="tag">power()</span>
            <span className="tag">sqrt()</span>
            <span className="tag">sin()</span>
            <span className="tag">cos()</span>
            <span className="tag">argmax()</span>
            <span className="tag">argmin()</span>
            <span className="tag">cumsum()</span>
            <span className="tag">flatten()</span>
            <span className="tag">ravel()</span>
            <span className="tag">hstack()</span>
            <span className="tag">vstack()</span>
            <span className="tag">median()</span>
            <span className="tag">percentile()</span>
            <span className="tag">unique()</span>
            <span className="tag">isnan()</span>
            <span className="tag">isfinite()</span>
          </div>
        </div>
        {/* Utility Functions */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            Utility Functions{" "}
            <span className="text-lg font-semibold text-rose-400">
              (Specialized Tools)
            </span>
          </h2>
          <p className="mt-2 text-gray-400">
            Valuable for edge cases and specific applications.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="tag">all()</span>
            <span className="tag">any()</span>
            <span className="tag">ceil()</span>
            <span className="tag">floor()</span>
            <span className="tag">copy()</span>
            <span className="tag">corrcoef()</span>
            <span className="tag">eye()</span>
            <span className="tag">diag()</span>
            <span className="tag">full()</span>
            <span className="tag">histogram()</span>
            <span className="tag">interp()</span>
            <span className="tag">polyfit()</span>
            <span className="tag">roll()</span>
            <span className="tag">squeeze()</span>
            <span className="tag">savez()</span>
          </div>
        </div>
      </div>
    </section>
    <div className="section-divider" />
    {/* Learning Path */}
    <section id="learning-path" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">
          Recommended Learning Path
        </h2>
        <p className="mt-2 text-gray-400">
          Follow this path for maximum return on your learning investment.
        </p>
      </div>
      <div className="relative">
        {/* The connecting line */}
        <div className="hidden sm:block absolute top-1/2 left-0 w-full h-1 bg-gray-700 -translate-y-1/2" />
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="z-10 w-16 h-16 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold text-2xl border-4 border-gray-900">
              1
            </div>
            <h4 className="mt-4 text-xl font-semibold text-white">
              Array Creation
            </h4>
            <p className="text-gray-400 text-sm">
              array, arange, linspace, zeros, ones
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="z-10 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-2xl border-4 border-gray-900">
              2
            </div>
            <h4 className="mt-4 text-xl font-semibold text-white">
              Basic Operations
            </h4>
            <p className="text-gray-400 text-sm">
              sum, mean, max, min, add, multiply
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="z-10 w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-2xl border-4 border-gray-900">
              3
            </div>
            <h4 className="mt-4 text-xl font-semibold text-white">
              Manipulation
            </h4>
            <p className="text-gray-400 text-sm">
              reshape, transpose, concatenate
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="z-10 w-16 h-16 rounded-full bg-rose-500 flex items-center justify-center text-white font-bold text-2xl border-4 border-gray-900">
              4
            </div>
            <h4 className="mt-4 text-xl font-semibold text-white">
              Advanced Topics
            </h4>
            <p className="text-gray-400 text-sm">dot, matmul, where, I/O</p>
          </div>
        </div>
      </div>
    </section>
    {/* ======================================================================= */}
    {/* ============ START: Quick Reference Section =========================== */}
    {/* ======================================================================= */}
    <section id="quick-reference" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">
          Full A-Z Quick Reference
        </h2>
        <p className="mt-2 text-gray-400">
          A searchable list of all covered NumPy functions.
        </p>
      </div>
      {/* Search Input */}
      <div className="max-w-2xl mx-auto mb-8">
        <input
          type="text"
          id="searchInput"
          onkeyup="filterFunctions()"
          placeholder="Search for a function..."
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
      </div>
      {/* Functions Table */}
      <div className="max-w-5xl mx-auto bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table id="functionsTable" className="min-w-full text-left">
            <thead className="bg-gray-900">
              <tr>
                <th className="p-4 font-semibold text-sky-400 font-code">
                  Function
                </th>
                <th className="p-4 font-semibold text-sky-400">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {/* Rows will be populated by JS */}
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm mt-4">
        *(Note: This is a subset; NumPy has ~500+ functions total.)*
      </p>
    </section>
    {/* ======================================================================= */}
    {/* ============== END: Quick Reference Section =========================== */}
    {/* ======================================================================= */}
    {/* ======================================================================= */}
    {/* ============= START: Critical Functions Section ======================= */}
    {/* ======================================================================= */}
    <section id="critical-functions" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">
          The Critical 20 Functions{" "}
          <span className="text-lg font-semibold text-green-400">
            (80% of Use Cases)
          </span>
        </h2>
        <p className="mt-2 text-gray-400">
          Master these functions to handle the vast majority of your numerical
          tasks.
        </p>
      </div>
      {/* Category: Array Creation & Initialization */}
      <h3 className="text-2xl font-semibold text-sky-400 mb-6">
        1. Array Creation &amp; Initialization
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card: np.array() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">np.array()</h4>
          <p className="text-gray-400 mt-1 mb-4">
            The fundamental way to create an array from a Python list or tuple.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.array([[1, 2], [3, 4]])
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <p className="font-code text-xs">[[1,2],[3,4]]</p>
                <p className="text-gray-500 text-xs">Python List</p>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-2 rounded">
                <div className="grid grid-cols-2 gap-1">
                  <div className="visual-item p-2 text-center rounded">1</div>
                  <div className="visual-item p-2 text-center rounded">2</div>
                  <div className="visual-item p-2 text-center rounded">3</div>
                  <div className="visual-item p-2 text-center rounded">4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.arange() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">
            np.arange()
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Create an array with evenly spaced values within a given interval
            (by step).
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.arange(0, 10, 2)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="visual-box p-2 rounded flex justify-around items-center">
              <div className="visual-item p-2 rounded">0</div>
              <div className="visual-item p-2 rounded">2</div>
              <div className="visual-item p-2 rounded">4</div>
              <div className="visual-item p-2 rounded">6</div>
              <div className="visual-item p-2 rounded">8</div>
            </div>
          </div>
        </div>
        {/* Card: np.linspace() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">
            np.linspace()
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Create an array with a specific number of evenly spaced points.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.linspace(0, 10, 5)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="visual-box p-2 rounded flex justify-around items-center">
              <div className="visual-item p-2 rounded">0.0</div>
              <div className="visual-item p-2 rounded">2.5</div>
              <div className="visual-item p-2 rounded">5.0</div>
              <div className="visual-item p-2 rounded">7.5</div>
              <div className="visual-item p-2 rounded">10.0</div>
            </div>
          </div>
        </div>
        {/* Card: np.zeros() / np.ones() / np.empty() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">
            np.zeros() / ones()
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Create efficiently initialized placeholder arrays of a given shape.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              zeros_arr = np.zeros((2, 3))
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization (zeros):</p>
            <div className="visual-box p-2 rounded">
              <div className="grid grid-cols-3 gap-1">
                <div className="visual-item p-2 text-center rounded">0</div>
                <div className="visual-item p-2 text-center rounded">0</div>
                <div className="visual-item p-2 text-center rounded">0</div>
                <div className="visual-item p-2 text-center rounded">0</div>
                <div className="visual-item p-2 text-center rounded">0</div>
                <div className="visual-item p-2 text-center rounded">0</div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.random.* */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">
            np.random.rand()
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Generate arrays of random numbers (e.g., from a uniform
            distribution).
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              rand_arr = np.random.rand(2, 3)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="visual-box p-2 rounded">
              <div className="grid grid-cols-3 gap-1">
                <div className="visual-item p-2 text-center rounded text-xs">
                  0.12
                </div>
                <div className="visual-item p-2 text-center rounded text-xs">
                  0.98
                </div>
                <div className="visual-item p-2 text-center rounded text-xs">
                  0.54
                </div>
                <div className="visual-item p-2 text-center rounded text-xs">
                  0.33
                </div>
                <div className="visual-item p-2 text-center rounded text-xs">
                  0.67
                </div>
                <div className="visual-item p-2 text-center rounded text-xs">
                  0.09
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Category: Array Manipulation */}
      <h3 className="text-2xl font-semibold text-sky-400 mt-12 mb-6">
        2. Array Manipulation &amp; Shaping
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card: np.reshape() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">
            np.reshape()
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Change the shape of an array without changing its data.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.arange(6).reshape((2, 3))
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded">0</div>
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">2</div>
                <div className="visual-item p-2 rounded">3</div>
                <div className="visual-item p-2 rounded">4</div>
                <div className="visual-item p-2 rounded">5</div>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-2 rounded">
                <div className="grid grid-cols-3 gap-1">
                  <div className="visual-item p-2 text-center rounded">0</div>
                  <div className="visual-item p-2 text-center rounded">1</div>
                  <div className="visual-item p-2 text-center rounded">2</div>
                  <div className="visual-item p-2 text-center rounded">3</div>
                  <div className="visual-item p-2 text-center rounded">4</div>
                  <div className="visual-item p-2 text-center rounded">5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.concatenate() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">
            np.concatenate()
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Join a sequence of arrays along an existing axis.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              a = np.array([[1],[2]]){"\n"}b = np.array([[3],[4]]){"\n"}
              np.concatenate((a, b), axis=0)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">
              Visualization (axis=0):
            </p>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex flex-col space-y-2">
                <div className="visual-box p-1 rounded">
                  <div className="visual-item px-2 py-1 rounded">1</div>
                  <div className="visual-item px-2 py-1 mt-1 rounded">2</div>
                </div>
                <div className="visual-box p-1 rounded">
                  <div className="visual-item px-2 py-1 rounded">3</div>
                  <div className="visual-item px-2 py-1 mt-1 rounded">4</div>
                </div>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-1 rounded">
                <div className="visual-item px-2 py-1 rounded">1</div>
                <div className="visual-item px-2 py-1 mt-1 rounded">2</div>
                <div className="visual-item px-2 py-1 mt-1 rounded bg-sky-600 border-sky-400">
                  3
                </div>
                <div className="visual-item px-2 py-1 mt-1 rounded bg-sky-600 border-sky-400">
                  4
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.transpose() or .T */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">
            np.transpose() or .T
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Swap the axes of an array (rows become columns and vice-versa).
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.array([[1,2],[3,4]]){"\n"}arr.T
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-2 rounded">
                <div className="grid grid-cols-2 gap-1">
                  <div className="visual-item p-2 text-center rounded">1</div>
                  <div className="visual-item p-2 text-center rounded bg-sky-600 border-sky-400">
                    2
                  </div>
                  <div className="visual-item p-2 text-center rounded bg-green-600 border-green-400">
                    3
                  </div>
                  <div className="visual-item p-2 text-center rounded">4</div>
                </div>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-2 rounded">
                <div className="grid grid-cols-2 gap-1">
                  <div className="visual-item p-2 text-center rounded">1</div>
                  <div className="visual-item p-2 text-center rounded bg-green-600 border-green-400">
                    3
                  </div>
                  <div className="visual-item p-2 text-center rounded bg-sky-600 border-sky-400">
                    2
                  </div>
                  <div className="visual-item p-2 text-center rounded">4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Category: Statistics, Math & Logic */}
      <h3 className="text-2xl font-semibold text-sky-400 mt-12 mb-6">
        3. Statistics, Math &amp; Logic
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card: np.sum() / mean() / max() / min() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">
            sum() / mean() / max()
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Calculate aggregate statistics across the entire array or an axis.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.array([1, 5, 2, 8]){"\n"}arr.sum() # Result: 16
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization (sum):</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">5</div>
                <div className="visual-item p-2 rounded">2</div>
                <div className="visual-item p-2 rounded">8</div>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-1 rounded">
                <div className="visual-item p-2 rounded bg-green-600 border-green-400">
                  16
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.dot() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">np.dot()</h4>
          <p className="text-gray-400 mt-1 mb-4">
            Perform dot product of two arrays (essential for linear algebra).
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              a = np.array([1, 2]){"\n"}b = np.array([3, 4]){"\n"}np.dot(a, b) #
              Result: 11
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">
              Visualization: (1*3) + (2*4)
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex flex-col space-y-2">
                <div className="visual-box p-1 rounded flex space-x-1">
                  <div className="visual-item p-2 rounded">1</div>
                  <div className="visual-item p-2 rounded">2</div>
                </div>
                <div className="visual-box p-1 rounded flex space-x-1">
                  <div className="visual-item p-2 rounded">3</div>
                  <div className="visual-item p-2 rounded">4</div>
                </div>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-1 rounded">
                <div className="visual-item p-2 rounded bg-green-600 border-green-400">
                  11
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.matmul() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">
            np.matmul()
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Perform matrix product of two arrays.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              a = np.ones((2,3)){"\n"}b = np.ones((3,2)){"\n"}np.matmul(a,b)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="text-xs text-center">2x3</div>
              <div className="visual-box p-1 rounded">...</div>
              <div className="text-2xl font-bold">X</div>
              <div className="text-xs text-center">3x2</div>
              <div className="visual-box p-1 rounded">...</div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="text-xs text-center">2x2</div>
              <div className="visual-box p-1 rounded">...</div>
            </div>
          </div>
        </div>
        {/* Card: np.sort() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">np.sort()</h4>
          <p className="text-gray-400 mt-1 mb-4">
            Return a sorted copy of an array.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.array([5, 1, 8, 2]){"\n"}np.sort(arr)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded">5</div>
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">8</div>
                <div className="visual-item p-2 rounded">2</div>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">2</div>
                <div className="visual-item p-2 rounded">5</div>
                <div className="visual-item p-2 rounded">8</div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.where() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">np.where()</h4>
          <p className="text-gray-400 mt-1 mb-4">
            Return elements chosen from x or y depending on a condition.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.arange(5){"\n"}np.where(arr &gt; 2, 'big', 'small')
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="text-center">
              <div className="visual-box p-1 rounded flex space-x-1 justify-center">
                <div className="visual-item p-2 rounded">0</div>
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">2</div>
                <div className="visual-item p-2 rounded bg-green-600 border-green-400">
                  3
                </div>
                <div className="visual-item p-2 rounded bg-green-600 border-green-400">
                  4
                </div>
              </div>
              <span className="arrow text-2xl font-bold">↓</span>
              <div className="visual-box p-1 rounded flex space-x-1 text-xs justify-center">
                <div className="visual-item p-2 rounded">s</div>
                <div className="visual-item p-2 rounded">s</div>
                <div className="visual-item p-2 rounded">s</div>
                <div className="visual-item p-2 rounded bg-green-600 border-green-400">
                  b
                </div>
                <div className="visual-item p-2 rounded bg-green-600 border-green-400">
                  b
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Category: Data I/O */}
      <h3 className="text-2xl font-semibold text-sky-400 mt-12 mb-6">
        4. Data Input/Output
      </h3>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Card: np.loadtxt() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">
            np.loadtxt()
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Load data from a text file, with each row as a new array entry.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              data = np.loadtxt('data.txt')
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <p className="text-gray-500 text-xs mt-1">data.txt</p>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-2 rounded">
                <div className="grid grid-cols-2 gap-1">
                  <div className="visual-item p-2 text-center rounded">1</div>
                  <div className="visual-item p-2 text-center rounded">2</div>
                  <div className="visual-item p-2 text-center rounded">3</div>
                  <div className="visual-item p-2 text-center rounded">4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.save() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">np.save()</h4>
          <p className="text-gray-400 mt-1 mb-4">
            Save an array to a binary file in NumPy `.npy` format.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.array([1,2,3]){"\n"}np.save('my_array.npy', arr)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-2 rounded">
                <div className="flex space-x-1">
                  <div className="visual-item p-2 text-center rounded">1</div>
                  <div className="visual-item p-2 text-center rounded">2</div>
                  <div className="visual-item p-2 text-center rounded">3</div>
                </div>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                  <path
                    fillRule="evenodd"
                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-500 text-xs mt-1">my_array.npy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Critical Section */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-amber-400 mb-4">
          Why Are These Critical?
        </h3>
        <div className="text-left bg-gray-800 border border-gray-700 rounded-lg p-6 space-y-3">
          <p className="text-gray-300">
            <strong className="text-green-400">Core Functionality:</strong> They
            handle array creation, math, statistics, and I/O — the absolute
            bedrock of most NumPy use cases.
          </p>
          <p className="text-gray-300">
            <strong className="text-green-400">Broad Application:</strong> These
            functions are indispensable in data science, machine learning, and
            scientific computing. For example,{" "}
            <code className="font-code text-sm bg-gray-700 px-1 rounded">
              np.dot()
            </code>{" "}
            and{" "}
            <code className="font-code text-sm bg-gray-700 px-1 rounded">
              np.matmul()
            </code>{" "}
            are the engines behind neural networks and other advanced
            algorithms.
          </p>
        </div>
      </div>
    </section>
    {/* ======================================================================= */}
    {/* ============== END: Critical Functions Section ======================== */}
    {/* ======================================================================= */}
    {/* ======================================================================= */}
    {/* ============ START: Important Functions Section ======================= */}
    {/* ======================================================================= */}
    <section id="important-functions" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">
          The Important 30 Functions{" "}
          <span className="text-lg font-semibold text-amber-400">
            (Supporting Roles)
          </span>
        </h2>
        <p className="mt-2 text-gray-400">
          Frequently used to support critical functions and handle specialized
          tasks.
        </p>
      </div>
      {/* Category: Element-wise Operations */}
      <h3 className="text-2xl font-semibold text-sky-400 mb-6">
        1. Element-wise &amp; Mathematical Operations
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card: np.add() / abs() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">
            add() / sqrt() / power()
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Perform element-wise mathematical operations on arrays.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.array([1, 4, 9]){"\n"}np.sqrt(arr)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization (sqrt):</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">4</div>
                <div className="visual-item p-2 rounded">9</div>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded bg-green-600 border-green-400">
                  1.
                </div>
                <div className="visual-item p-2 rounded bg-green-600 border-green-400">
                  2.
                </div>
                <div className="visual-item p-2 rounded bg-green-600 border-green-400">
                  3.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.log() / exp() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">
            log() / exp()
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Compute element-wise natural logarithm or exponential.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.array([1, 2, 3]){"\n"}np.exp(arr)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization (exp):</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">2</div>
                <div className="visual-item p-2 rounded">3</div>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-1 rounded flex space-x-1 text-xs">
                <div className="visual-item p-2 rounded">2.71</div>
                <div className="visual-item p-2 rounded">7.38</div>
                <div className="visual-item p-2 rounded">20.08</div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.sin() / cos() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">
            sin() / cos()
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Apply trigonometric functions to each element in an array.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.array([0, np.pi/2]){"\n"}np.sin(arr)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization (sin):</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-1 rounded flex space-x-1 text-xs">
                <div className="visual-item p-2 rounded">0</div>
                <div className="visual-item p-2 rounded">1.57</div>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded">0</div>
                <div className="visual-item p-2 rounded">1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Category: Shaping & Stacking */}
      <h3 className="text-2xl font-semibold text-sky-400 mt-12 mb-6">
        2. Shaping, Stacking &amp; Splitting
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card: np.flatten() / ravel() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">
            flatten() / ravel()
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Collapse a multi-dimensional array into a single dimension.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.array([[1,2],[3,4]]){"\n"}arr.flatten()
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-2 rounded">
                <div className="grid grid-cols-2 gap-1">
                  <div className="visual-item p-2 text-center rounded">1</div>
                  <div className="visual-item p-2 text-center rounded">2</div>
                  <div className="visual-item p-2 text-center rounded">3</div>
                  <div className="visual-item p-2 text-center rounded">4</div>
                </div>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">2</div>
                <div className="visual-item p-2 rounded">3</div>
                <div className="visual-item p-2 rounded">4</div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.hstack() / vstack() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">
            hstack() / vstack()
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Stack arrays together either horizontally or vertically.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              a = np.array([1,2]){"\n"}b = np.array([3,4]){"\n"}np.hstack((a,b))
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">
              Visualization (hstack):
            </p>
            <div className="flex items-center justify-center space-x-2">
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">2</div>
              </div>
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded">3</div>
                <div className="visual-item p-2 rounded">4</div>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">2</div>
                <div className="visual-item p-2 rounded bg-sky-600 border-sky-400">
                  3
                </div>
                <div className="visual-item p-2 rounded bg-sky-600 border-sky-400">
                  4
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.split() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">np.split()</h4>
          <p className="text-gray-400 mt-1 mb-4">
            Split an array into multiple sub-arrays.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.arange(6){"\n"}np.split(arr, 3)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded">0</div>
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">2</div>
                <div className="visual-item p-2 rounded">3</div>
                <div className="visual-item p-2 rounded">4</div>
                <div className="visual-item p-2 rounded">5</div>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="flex space-x-2">
                <div className="visual-box p-1 rounded flex space-x-1">
                  <div className="visual-item p-2 rounded">0</div>
                  <div className="visual-item p-2 rounded">1</div>
                </div>
                <div className="visual-box p-1 rounded flex space-x-1">
                  <div className="visual-item p-2 rounded">2</div>
                  <div className="visual-item p-2 rounded">3</div>
                </div>
                <div className="visual-box p-1 rounded flex space-x-1">
                  <div className="visual-item p-2 rounded">4</div>
                  <div className="visual-item p-2 rounded">5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.tile() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">np.tile()</h4>
          <p className="text-gray-400 mt-1 mb-4">
            Construct a new array by repeating an existing one.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.array([1, 2]){"\n"}np.tile(arr, 3)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">2</div>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">2</div>
                <div className="visual-item p-2 rounded bg-sky-600 border-sky-400">
                  1
                </div>
                <div className="visual-item p-2 rounded bg-sky-600 border-sky-400">
                  2
                </div>
                <div className="visual-item p-2 rounded bg-green-600 border-green-400">
                  1
                </div>
                <div className="visual-item p-2 rounded bg-green-600 border-green-400">
                  2
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.diag() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">np.diag()</h4>
          <p className="text-gray-400 mt-1 mb-4">
            Extract a diagonal or construct a diagonal array.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.arange(9).reshape((3,3)){"\n"}np.diag(arr)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-2 rounded">
                <div className="grid grid-cols-3 gap-1">
                  <div className="visual-item p-2 text-center rounded bg-green-600 border-green-400">
                    0
                  </div>
                  <div className="visual-item p-2 text-center rounded">1</div>
                  <div className="visual-item p-2 text-center rounded">2</div>
                  <div className="visual-item p-2 text-center rounded">3</div>
                  <div className="visual-item p-2 text-center rounded bg-green-600 border-green-400">
                    4
                  </div>
                  <div className="visual-item p-2 text-center rounded">5</div>
                  <div className="visual-item p-2 text-center rounded">6</div>
                  <div className="visual-item p-2 text-center rounded">7</div>
                  <div className="visual-item p-2 text-center rounded bg-green-600 border-green-400">
                    8
                  </div>
                </div>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded">0</div>
                <div className="visual-item p-2 rounded">4</div>
                <div className="visual-item p-2 rounded">8</div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.meshgrid() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">
            np.meshgrid()
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Create coordinate matrices from coordinate vectors for plotting.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              x = [0,1]; y = [0,1]{"\n"}xv, yv = np.meshgrid(x, y)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-2 text-xs">
              <div className="text-center">
                x=[0,1]
                <br />
                y=[0,1]
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="text-center">
                xv = [[0,1],[0,1]]
                <div className="visual-box p-1 rounded mt-1">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="visual-item p-1 rounded">0</div>
                    <div className="visual-item p-1 rounded">1</div>
                    <div className="visual-item p-1 rounded">0</div>
                    <div className="visual-item p-1 rounded">1</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                yv = [[0,0],[1,1]]
                <div className="visual-box p-1 rounded mt-1">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="visual-item p-1 rounded">0</div>
                    <div className="visual-item p-1 rounded">0</div>
                    <div className="visual-item p-1 rounded">1</div>
                    <div className="visual-item p-1 rounded">1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Category: Statistics & Analysis */}
      <h3 className="text-2xl font-semibold text-sky-400 mt-12 mb-6">
        3. Statistics, Analysis &amp; Uniqueness
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card: np.argmax() / argmin() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">
            argmax() / argmin()
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Find the indices (positions) of the maximum or minimum values.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.array([5, 1, 9, 2]){"\n"}arr.argmax() # Result: 2
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">
              Visualization (argmax):
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-1 rounded flex space-x-1 relative">
                <div className="visual-item p-2 rounded">5</div>
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded bg-green-600 border-green-400">
                  9
                </div>
                <div className="visual-item p-2 rounded">2</div>
                <div className="absolute -bottom-4 text-xs text-gray-400 flex w-full justify-around">
                  <span>0</span>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                </div>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-1 rounded">
                <div className="visual-item p-2 rounded bg-green-600 border-green-400">
                  2
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.cumsum() / prod() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">
            cumsum() / prod()
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Calculate the cumulative sum or product of array elements.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.array([1, 2, 3, 4]){"\n"}arr.cumsum()
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">
              Visualization (cumsum):
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">2</div>
                <div className="visual-item p-2 rounded">3</div>
                <div className="visual-item p-2 rounded">4</div>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">3</div>
                <div className="visual-item p-2 rounded">6</div>
                <div className="visual-item p-2 rounded">10</div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.std() / var() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">
            std() / var()
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Compute the standard deviation or variance of the data.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.array([1, 2, 3, 4]){"\n"}arr.std() # Result: 1.118
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization (std):</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">2</div>
                <div className="visual-item p-2 rounded">3</div>
                <div className="visual-item p-2 rounded">4</div>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-1 rounded">
                <div className="visual-item p-2 rounded bg-green-600 border-green-400">
                  1.118
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.percentile() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">
            np.percentile()
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Compute the q-th percentile of the data along a specified axis.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.arange(1, 101){"\n"}np.percentile(arr, 50) # Median
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">
              Visualization (50th Percentile):
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-1 rounded flex space-x-1 text-xs">
                <div className="visual-item p-1 rounded">1</div>
                <div className="visual-item p-1 rounded">...</div>
                <div className="visual-item p-1 rounded bg-green-600 border-green-400">
                  50
                </div>
                <div className="visual-item p-1 rounded">...</div>
                <div className="visual-item p-1 rounded">100</div>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-1 rounded">
                <div className="visual-item p-2 rounded bg-green-600 border-green-400">
                  50.0
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.unique() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">
            np.unique()
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Find the sorted unique elements of an array.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.array([1, 2, 2, 3, 1]){"\n"}np.unique(arr)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">2</div>
                <div className="visual-item p-2 rounded">2</div>
                <div className="visual-item p-2 rounded">3</div>
                <div className="visual-item p-2 rounded">1</div>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">2</div>
                <div className="visual-item p-2 rounded">3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Important Section */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-amber-400 mb-4">
          Why Are These Important?
        </h3>
        <div className="text-left bg-gray-800 border border-gray-700 rounded-lg p-6 space-y-3">
          <p className="text-gray-300">
            <strong className="text-green-400">
              Enhance Critical Functions:
            </strong>{" "}
            They provide the building blocks for more complex operations. For
            example,{" "}
            <code className="font-code text-sm bg-gray-700 px-1 rounded">
              std()
            </code>{" "}
            (standard deviation) relies on the result of{" "}
            <code className="font-code text-sm bg-gray-700 px-1 rounded">
              mean()
            </code>
            .
          </p>
          <p className="text-gray-300">
            <strong className="text-green-400">
              Enable Specialized Tasks:
            </strong>{" "}
            These functions are crucial for specific domains. For instance,{" "}
            <code className="font-code text-sm bg-gray-700 px-1 rounded">
              meshgrid()
            </code>{" "}
            is essential for creating 2D and 3D plots, and{" "}
            <code className="font-code text-sm bg-gray-700 px-1 rounded">
              unique()
            </code>{" "}
            is vital for data cleaning and analysis.
          </p>
        </div>
      </div>
    </section>
    {/* ======================================================================= */}
    {/* ============= END: Important Functions Section ======================== */}
    {/* ======================================================================= */}
    {/* ======================================================================= */}
    {/* ============= START: Utility Functions Section ======================== */}
    {/* ======================================================================= */}
    <section id="utility-functions" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">
          The Utility Functions{" "}
          <span className="text-lg font-semibold text-rose-400">
            (Specialized Tools)
          </span>
        </h2>
        <p className="mt-2 text-gray-400">
          Valuable for edge cases, convenience, or specific applications.
        </p>
      </div>
      {/* Category: Boolean, Checks & Rounding */}
      <h3 className="text-2xl font-semibold text-sky-400 mb-6">
        1. Boolean, Checks &amp; Rounding
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card: np.all() / any() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">
            all() / any()
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Check if all or any elements in an array evaluate to True.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.array([True, True, False]){"\n"}arr.any() # Result: True
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization (any):</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-1 rounded flex space-x-1 text-xs">
                <div className="visual-item p-2 rounded">T</div>
                <div className="visual-item p-2 rounded">T</div>
                <div className="visual-item p-2 rounded bg-rose-600 border-rose-400">
                  F
                </div>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-1 rounded">
                <div className="visual-item p-2 rounded bg-green-600 border-green-400">
                  True
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.isnan() / isinf() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">
            isnan() / isinf()
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Create a boolean mask to identify NaN (Not a Number) or infinity.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.array([1, np.nan, 3]){"\n"}np.isnan(arr)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization (isnan):</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded bg-rose-600 border-rose-400">
                  NaN
                </div>
                <div className="visual-item p-2 rounded">3</div>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-1 rounded flex space-x-1 text-xs">
                <div className="visual-item p-2 rounded">F</div>
                <div className="visual-item p-2 rounded bg-green-600 border-green-400">
                  T
                </div>
                <div className="visual-item p-2 rounded">F</div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.ceil() / floor() / round() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">
            ceil() / floor() / round()
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Perform element-wise rounding to the ceiling, floor, or nearest
            integer.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.array([1.1, 2.9]){"\n"}np.ceil(arr)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization (ceil):</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded">1.1</div>
                <div className="visual-item p-2 rounded">2.9</div>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded">2.</div>
                <div className="visual-item p-2 rounded">3.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Category: Data Generation & Manipulation */}
      <h3 className="text-2xl font-semibold text-sky-400 mt-12 mb-6">
        2. Data Generation &amp; Manipulation
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card: np.full() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">full()</h4>
          <p className="text-gray-400 mt-1 mb-4">
            Create a new array of a given shape, filled with a specific value.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.full((2, 3), 7)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center text-gray-400">
                Shape: (2,3)
                <br />
                Fill: 7
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-2 rounded">
                <div className="grid grid-cols-3 gap-1">
                  <div className="visual-item p-2 text-center rounded">7</div>
                  <div className="visual-item p-2 text-center rounded">7</div>
                  <div className="visual-item p-2 text-center rounded">7</div>
                  <div className="visual-item p-2 text-center rounded">7</div>
                  <div className="visual-item p-2 text-center rounded">7</div>
                  <div className="visual-item p-2 text-center rounded">7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.repeat() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">repeat()</h4>
          <p className="text-gray-400 mt-1 mb-4">
            Repeat elements of an array a given number of times.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.array([1, 2]){"\n"}np.repeat(arr, 3)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">2</div>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">2</div>
                <div className="visual-item p-2 rounded">2</div>
                <div className="visual-item p-2 rounded">2</div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.roll() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">roll()</h4>
          <p className="text-gray-400 mt-1 mb-4">
            "Roll" array elements along an axis; elements that roll off one end
            reappear on the other.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.arange(4){"\n"}np.roll(arr, 1)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded">0</div>
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">2</div>
                <div className="visual-item p-2 rounded bg-rose-600 border-rose-400">
                  3
                </div>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-1 rounded flex space-x-1">
                <div className="visual-item p-2 rounded bg-rose-600 border-rose-400">
                  3
                </div>
                <div className="visual-item p-2 rounded">0</div>
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">2</div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.squeeze() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">squeeze()</h4>
          <p className="text-gray-400 mt-1 mb-4">
            Remove single-dimensional entries from the shape of an array.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              arr = np.array([[[1, 2, 3]]]){"\n"}np.squeeze(arr)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <div className="visual-box p-1 rounded">...</div>
                <p className="text-gray-500 text-xs mt-1">Shape: (1, 1, 3)</p>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="text-center">
                <div className="visual-box p-1 rounded">...</div>
                <p className="text-gray-500 text-xs mt-1">Shape: (3,)</p>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.average() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">average()</h4>
          <p className="text-gray-400 mt-1 mb-4">
            Compute the weighted average along a specified axis.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              data = [10, 20]{"\n"}weights = [1, 3]{"\n"}np.average(data,
              weights=weights)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">
              Visualization: (10*1 + 20*3) / 4
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <div className="visual-box p-1 rounded flex space-x-1">
                  <div className="visual-item p-2 rounded">10</div>
                  <div className="visual-item p-2 rounded">20</div>
                </div>
                <p className="text-gray-500 text-xs mt-1">Weights: [1, 3]</p>
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-1 rounded">
                <div className="visual-item p-2 rounded bg-green-600 border-green-400">
                  17.5
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.corrcoef() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">corrcoef()</h4>
          <p className="text-gray-400 mt-1 mb-4">
            Return Pearson product-moment correlation coefficients.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              x = [1,2,3]; y = [3,5,7]{"\n"}np.corrcoef(x, y)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-4 text-xs">
              <div className="text-center">
                x=[1,2,3]
                <br />
                y=[3,5,7]
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="text-center">
                <p>Correlation Matrix</p>
                <div className="visual-box p-1 rounded mt-1">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="visual-item p-1 rounded">1.</div>
                    <div className="visual-item p-1 rounded">1.</div>
                    <div className="visual-item p-1 rounded">1.</div>
                    <div className="visual-item p-1 rounded">1.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Category: Advanced Analysis */}
      <h3 className="text-2xl font-semibold text-sky-400 mt-12 mb-6">
        3. Advanced Analysis &amp; Interop
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card: np.histogram() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">
            histogram()
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Compute the histogram of a set of data.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              data = [1, 2, 1, 3, 1]{"\n"}np.histogram(data, bins=3)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-1 rounded flex space-x-1">...</div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-2 rounded flex items-end space-x-1 h-20">
                <div
                  className="visual-item w-4 bg-green-600"
                  style={{ height: "80%" }}
                />
                <div
                  className="visual-item w-4 bg-green-600"
                  style={{ height: "30%" }}
                />
                <div
                  className="visual-item w-4 bg-green-600"
                  style={{ height: "30%" }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.interp() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">interp()</h4>
          <p className="text-gray-400 mt-1 mb-4">
            One-dimensional linear interpolation.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              np.interp(2.5, [1,3], [5,9])
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center text-xs text-gray-400">
                x=2.5
                <br />
                xp=[1, 3]
                <br />
                fp=[5, 9]
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="visual-box p-1 rounded">
                <div className="visual-item p-2 rounded bg-green-600 border-green-400">
                  7.0
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.polyfit() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-white font-code">polyfit()</h4>
          <p className="text-gray-400 mt-1 mb-4">
            Fit a polynomial to a set of data points.
          </p>
          <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-white">
              x=[1,2,3]; y=[2,4.1,5.9]{"\n"}np.polyfit(x, y, 1)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-2 rounded h-20 w-24 relative">
                <div
                  className="absolute visual-item rounded-full w-2 h-2"
                  style={{ left: "10%", bottom: "20%" }}
                />
                <div
                  className="absolute visual-item rounded-full w-2 h-2"
                  style={{ left: "45%", bottom: "50%" }}
                />
                <div
                  className="absolute visual-item rounded-full w-2 h-2"
                  style={{ left: "80%", bottom: "75%" }}
                />
                <div
                  className="absolute w-full h-0.5 bg-rose-500"
                  style={{ top: "55%", transform: "rotate(-20deg)" }}
                />
              </div>
              <span className="arrow text-2xl font-bold">→</span>
              <div className="text-center text-xs">
                Coefficients
                <br />
                [slope, intercept]
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Utility Section */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-rose-400 mb-4">
          Why Are These "Utility"?
        </h3>
        <div className="text-left bg-gray-800 border border-gray-700 rounded-lg p-6 space-y-3">
          <p className="text-gray-300">
            <strong className="text-green-400">Niche Use Cases:</strong> Many of
            these functions solve specific problems that don't appear in every
            project. For example,{" "}
            <code className="font-code text-sm bg-gray-700 px-1 rounded">
              polyfit()
            </code>{" "}
            is mainly for curve fitting, and{" "}
            <code className="font-code text-sm bg-gray-700 px-1 rounded">
              interp()
            </code>{" "}
            is for interpolation tasks.
          </p>
          <p className="text-gray-300">
            <strong className="text-green-400">
              Convenience &amp; Optimization:
            </strong>{" "}
            Some are helpers that offer a convenient syntax (
            <code className="font-code text-sm bg-gray-700 px-1 rounded">
              ceil()
            </code>
            ,{" "}
            <code className="font-code text-sm bg-gray-700 px-1 rounded">
              floor()
            </code>
            ) or are used for performance optimization in rare cases, like
            interfacing with low-level memory buffers (
            <code className="font-code text-sm bg-gray-700 px-1 rounded">
              frombuffer()
            </code>
            ).
          </p>
        </div>
      </div>
    </section>
    {/* ======================================================================= */}
    {/* ============== END: Utility Functions Section ========================= */}
    {/* ======================================================================= */}
    {/* ======================================================================= */}
    {/* =========== START: Various Array Creation Methods Section ============= */}
    {/* ======================================================================= */}
    <section id="array-creation" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">
          Foundations: Various Ways to Create a NumPy Array
        </h2>
        <p className="mt-2 text-gray-400">
          Different methods to initialize arrays for any situation.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card: np.array() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-emerald-400 font-code">
            1. From a Python List
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            The most direct way: convert existing Python lists or tuples.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              np.array([[1, 2], [3, 4]])
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <p className="font-code text-xs">[[1,2],[3,4]]</p>
                <p className="text-gray-500 text-xs">Python List</p>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-2 rounded border-emerald-500/50">
                <div className="grid grid-cols-2 gap-1">
                  <div className="visual-item p-2 text-center rounded bg-emerald-900/50 border-emerald-700">
                    1
                  </div>
                  <div className="visual-item p-2 text-center rounded bg-emerald-900/50 border-emerald-700">
                    2
                  </div>
                  <div className="visual-item p-2 text-center rounded bg-emerald-900/50 border-emerald-700">
                    3
                  </div>
                  <div className="visual-item p-2 text-center rounded bg-emerald-900/50 border-emerald-700">
                    4
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.arange() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-sky-400 font-code">
            2. As a Sequence (arange)
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Create an array with values from a start to an end point with a
            defined step.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              np.arange(0, 10, 2)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="visual-box p-2 rounded flex justify-around items-center border-sky-500/50">
              <div className="visual-item p-2 rounded bg-sky-900/50 border-sky-700">
                0
              </div>
              <div className="visual-item p-2 rounded bg-sky-900/50 border-sky-700">
                2
              </div>
              <div className="visual-item p-2 rounded bg-sky-900/50 border-sky-700">
                4
              </div>
              <div className="visual-item p-2 rounded bg-sky-900/50 border-sky-700">
                6
              </div>
              <div className="visual-item p-2 rounded bg-sky-900/50 border-sky-700">
                8
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.linspace() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-amber-400 font-code">
            3. As a Sequence (linspace)
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Create an array with a specific number of points spaced evenly
            between start and end.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              np.linspace(0, 1, 5)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="visual-box p-2 rounded flex justify-around items-center text-xs border-amber-500/50">
              <div className="visual-item p-2 rounded bg-amber-900/50 border-amber-700">
                0.0
              </div>
              <div className="visual-item p-2 rounded bg-amber-900/50 border-amber-700">
                0.25
              </div>
              <div className="visual-item p-2 rounded bg-amber-900/50 border-amber-700">
                0.5
              </div>
              <div className="visual-item p-2 rounded bg-amber-900/50 border-amber-700">
                0.75
              </div>
              <div className="visual-item p-2 rounded bg-amber-900/50 border-amber-700">
                1.0
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.zeros() & np.ones() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-fuchsia-400 font-code">
            4. As Placeholders
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Create arrays of a specified shape filled entirely with 0s or 1s.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              np.ones((2, 4))
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization (ones):</p>
            <div className="visual-box p-2 rounded border-fuchsia-500/50">
              <div className="grid grid-cols-4 gap-1">
                <div className="visual-item p-2 text-center rounded bg-fuchsia-900/50 border-fuchsia-700">
                  1
                </div>
                <div className="visual-item p-2 text-center rounded bg-fuchsia-900/50 border-fuchsia-700">
                  1
                </div>
                <div className="visual-item p-2 text-center rounded bg-fuchsia-900/50 border-fuchsia-700">
                  1
                </div>
                <div className="visual-item p-2 text-center rounded bg-fuchsia-900/50 border-fuchsia-700">
                  1
                </div>
                <div className="visual-item p-2 text-center rounded bg-fuchsia-900/50 border-fuchsia-700">
                  1
                </div>
                <div className="visual-item p-2 text-center rounded bg-fuchsia-900/50 border-fuchsia-700">
                  1
                </div>
                <div className="visual-item p-2 text-center rounded bg-fuchsia-900/50 border-fuchsia-700">
                  1
                </div>
                <div className="visual-item p-2 text-center rounded bg-fuchsia-900/50 border-fuchsia-700">
                  1
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.full() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-rose-400 font-code">
            5. With a Constant Value
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Create an array of a specific shape filled with any constant value
            you choose.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              np.full((2, 3), 99)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="visual-box p-2 rounded border-rose-500/50">
              <div className="grid grid-cols-3 gap-1">
                <div className="visual-item p-2 text-center rounded bg-rose-900/50 border-rose-700">
                  99
                </div>
                <div className="visual-item p-2 text-center rounded bg-rose-900/50 border-rose-700">
                  99
                </div>
                <div className="visual-item p-2 text-center rounded bg-rose-900/50 border-rose-700">
                  99
                </div>
                <div className="visual-item p-2 text-center rounded bg-rose-900/50 border-rose-700">
                  99
                </div>
                <div className="visual-item p-2 text-center rounded bg-rose-900/50 border-rose-700">
                  99
                </div>
                <div className="visual-item p-2 text-center rounded bg-rose-900/50 border-rose-700">
                  99
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: np.eye() */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-indigo-400 font-code">
            6. An Identity Matrix
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Create a 2D square matrix with 1s on the main diagonal and 0s
            elsewhere.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">np.eye(4)</code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="visual-box p-2 rounded border-indigo-500/50">
              <div className="grid grid-cols-4 gap-1 text-xs">
                <div className="visual-item p-1 text-center rounded bg-indigo-600 border-indigo-400">
                  1
                </div>
                <div className="visual-item p-1 text-center rounded">0</div>
                <div className="visual-item p-1 text-center rounded">0</div>
                <div className="visual-item p-1 text-center rounded">0</div>
                <div className="visual-item p-1 text-center rounded">0</div>
                <div className="visual-item p-1 text-center rounded bg-indigo-600 border-indigo-400">
                  1
                </div>
                <div className="visual-item p-1 text-center rounded">0</div>
                <div className="visual-item p-1 text-center rounded">0</div>
                <div className="visual-item p-1 text-center rounded">0</div>
                <div className="visual-item p-1 text-center rounded">0</div>
                <div className="visual-item p-1 text-center rounded bg-indigo-600 border-indigo-400">
                  1
                </div>
                <div className="visual-item p-1 text-center rounded">0</div>
                <div className="visual-item p-1 text-center rounded">0</div>
                <div className="visual-item p-1 text-center rounded">0</div>
                <div className="visual-item p-1 text-center rounded">0</div>
                <div className="visual-item p-1 text-center rounded bg-indigo-600 border-indigo-400">
                  1
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ======================================================================= */}
    {/* ============ END: Various Array Creation Methods Section ============== */}
    {/* ======================================================================= */}
    {/* ======================================================================= */}
    {/* ================ START: Indexing Concepts Section ===================== */}
    {/* ======================================================================= */}
    <section id="indexing-concepts" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">
          Power Tools: Mastering Array Indexing
        </h2>
        <p className="mt-2 text-gray-400">
          How to select, slice, and filter data with precision.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Card: Basic Slicing */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-teal-400 font-code">
            1. Basic Slicing
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Extracting subarrays using `[start:stop:step]` notation for each
            dimension.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              arr = np.arange(16).reshape(4, 4){"\n"}# Get rows 1 and 2, and
              columns 2 and 3{"\n"}sub_array = arr[1:3, 2:4]
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-2 rounded border-teal-500/50">
                <div className="grid grid-cols-4 gap-1 text-xs">
                  <div className="visual-item p-1 text-center rounded">0</div>
                  <div className="visual-item p-1 text-center rounded">1</div>
                  <div className="visual-item p-1 text-center rounded">2</div>
                  <div className="visual-item p-1 text-center rounded">3</div>
                  <div className="visual-item p-1 text-center rounded">4</div>
                  <div className="visual-item p-1 text-center rounded">5</div>
                  <div className="visual-item p-1 text-center rounded bg-teal-900/50 border-teal-700">
                    6
                  </div>
                  <div className="visual-item p-1 text-center rounded bg-teal-900/50 border-teal-700">
                    7
                  </div>
                  <div className="visual-item p-1 text-center rounded">8</div>
                  <div className="visual-item p-1 text-center rounded">9</div>
                  <div className="visual-item p-1 text-center rounded bg-teal-900/50 border-teal-700">
                    10
                  </div>
                  <div className="visual-item p-1 text-center rounded bg-teal-900/50 border-teal-700">
                    11
                  </div>
                  <div className="visual-item p-1 text-center rounded">12</div>
                  <div className="visual-item p-1 text-center rounded">13</div>
                  <div className="visual-item p-1 text-center rounded">14</div>
                  <div className="visual-item p-1 text-center rounded">15</div>
                </div>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-2 rounded border-teal-500/50">
                <div className="grid grid-cols-2 gap-1">
                  <div className="visual-item p-2 text-center rounded bg-teal-900/50 border-teal-700">
                    6
                  </div>
                  <div className="visual-item p-2 text-center rounded bg-teal-900/50 border-teal-700">
                    7
                  </div>
                  <div className="visual-item p-2 text-center rounded bg-teal-900/50 border-teal-700">
                    10
                  </div>
                  <div className="visual-item p-2 text-center rounded bg-teal-900/50 border-teal-700">
                    11
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: Fancy Indexing */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-violet-400 font-code">
            2. Fancy Indexing (Integer Arrays)
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Using arrays of integers to select rows, columns, or specific
            elements in any order.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              arr = np.arange(16).reshape(4, 4){"\n"}# Get rows 3 and 1 in that
              specific order{"\n"}rows = arr[[3, 1]]
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-2 rounded border-violet-500/50">
                <div className="grid grid-cols-4 gap-1 text-xs">
                  <div className="visual-item p-1 text-center rounded">0</div>
                  <div className="visual-item p-1 text-center rounded">1</div>
                  <div className="visual-item p-1 text-center rounded">2</div>
                  <div className="visual-item p-1 text-center rounded">3</div>
                  <div className="visual-item p-1 text-center rounded bg-violet-900/50 border-violet-700">
                    4
                  </div>
                  <div className="visual-item p-1 text-center rounded bg-violet-900/50 border-violet-700">
                    5
                  </div>
                  <div className="visual-item p-1 text-center rounded bg-violet-900/50 border-violet-700">
                    6
                  </div>
                  <div className="visual-item p-1 text-center rounded bg-violet-900/50 border-violet-700">
                    7
                  </div>
                  <div className="visual-item p-1 text-center rounded">8</div>
                  <div className="visual-item p-1 text-center rounded">9</div>
                  <div className="visual-item p-1 text-center rounded">10</div>
                  <div className="visual-item p-1 text-center rounded">11</div>
                  <div className="visual-item p-1 text-center rounded bg-violet-600 border-violet-400">
                    12
                  </div>
                  <div className="visual-item p-1 text-center rounded bg-violet-600 border-violet-400">
                    13
                  </div>
                  <div className="visual-item p-1 text-center rounded bg-violet-600 border-violet-400">
                    14
                  </div>
                  <div className="visual-item p-1 text-center rounded bg-violet-600 border-violet-400">
                    15
                  </div>
                </div>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-2 rounded border-violet-500/50">
                <div className="grid grid-cols-4 gap-1 text-xs">
                  <div className="visual-item p-1 text-center rounded bg-violet-600 border-violet-400">
                    12
                  </div>
                  <div className="visual-item p-1 text-center rounded bg-violet-600 border-violet-400">
                    13
                  </div>
                  <div className="visual-item p-1 text-center rounded bg-violet-600 border-violet-400">
                    14
                  </div>
                  <div className="visual-item p-1 text-center rounded bg-violet-600 border-violet-400">
                    15
                  </div>
                  <div className="visual-item p-1 text-center rounded bg-violet-900/50 border-violet-700">
                    4
                  </div>
                  <div className="visual-item p-1 text-center rounded bg-violet-900/50 border-violet-700">
                    5
                  </div>
                  <div className="visual-item p-1 text-center rounded bg-violet-900/50 border-violet-700">
                    6
                  </div>
                  <div className="visual-item p-1 text-center rounded bg-violet-900/50 border-violet-700">
                    7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: Boolean Indexing */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-lime-400 font-code">
            3. Boolean Indexing (Masking)
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Filtering an array by creating a boolean "mask" based on a
            condition.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              arr = np.arange(9).reshape(3, 3){"\n"}# Select elements greater
              than 5{"\n"}filtered = arr[arr &gt; 5]
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="visual-box p-2 rounded border-lime-500/50">
                <div className="grid grid-cols-3 gap-1">
                  <div className="visual-item p-2 text-center rounded">0</div>
                  <div className="visual-item p-2 text-center rounded">1</div>
                  <div className="visual-item p-2 text-center rounded">2</div>
                  <div className="visual-item p-2 text-center rounded">3</div>
                  <div className="visual-item p-2 text-center rounded">4</div>
                  <div className="visual-item p-2 text-center rounded">5</div>
                  <div className="visual-item p-2 text-center rounded bg-lime-600 border-lime-400">
                    6
                  </div>
                  <div className="visual-item p-2 text-center rounded bg-lime-600 border-lime-400">
                    7
                  </div>
                  <div className="visual-item p-2 text-center rounded bg-lime-600 border-lime-400">
                    8
                  </div>
                </div>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-1 rounded flex space-x-1 border-lime-500/50">
                <div className="visual-item p-2 rounded bg-lime-600 border-lime-400">
                  6
                </div>
                <div className="visual-item p-2 rounded bg-lime-600 border-lime-400">
                  7
                </div>
                <div className="visual-item p-2 rounded bg-lime-600 border-lime-400">
                  8
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: Combining Indexing */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-cyan-400 font-code">
            4. Combining Indexing Types
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Mixing basic slicing with fancy indexing for powerful, complex
            selections.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              arr = np.arange(16).reshape(4, 4){"\n"}# From the first 2 rows,
              get cols 3 and 0{"\n"}combo = arr[0:2, [3, 0]]
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-2 rounded border-cyan-500/50">
                <div className="grid grid-cols-4 gap-1 text-xs">
                  <div className="visual-item p-1 text-center rounded bg-cyan-600 border-cyan-400">
                    0
                  </div>
                  <div className="visual-item p-1 text-center rounded">1</div>
                  <div className="visual-item p-1 text-center rounded">2</div>
                  <div className="visual-item p-1 text-center rounded bg-cyan-900/50 border-cyan-700">
                    3
                  </div>
                  <div className="visual-item p-1 text-center rounded bg-cyan-600 border-cyan-400">
                    4
                  </div>
                  <div className="visual-item p-1 text-center rounded">5</div>
                  <div className="visual-item p-1 text-center rounded">6</div>
                  <div className="visual-item p-1 text-center rounded bg-cyan-900/50 border-cyan-700">
                    7
                  </div>
                  <div className="visual-item p-1 text-center rounded">8</div>
                  <div className="visual-item p-1 text-center rounded">9</div>
                  <div className="visual-item p-1 text-center rounded">10</div>
                  <div className="visual-item p-1 text-center rounded">11</div>
                  <div className="visual-item p-1 text-center rounded">12</div>
                  <div className="visual-item p-1 text-center rounded">13</div>
                  <div className="visual-item p-1 text-center rounded">14</div>
                  <div className="visual-item p-1 text-center rounded">15</div>
                </div>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-2 rounded border-cyan-500/50">
                <div className="grid grid-cols-2 gap-1">
                  <div className="visual-item p-2 text-center rounded bg-cyan-900/50 border-cyan-700">
                    3
                  </div>
                  <div className="visual-item p-2 text-center rounded bg-cyan-600 border-cyan-400">
                    0
                  </div>
                  <div className="visual-item p-2 text-center rounded bg-cyan-900/50 border-cyan-700">
                    7
                  </div>
                  <div className="visual-item p-2 text-center rounded bg-cyan-600 border-cyan-400">
                    4
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ======================================================================= */}
    {/* ================= END: Indexing Concepts Section ====================== */}
    {/* ======================================================================= */}
    {/* ======================================================================= */}
    {/* ================= START: Slicing Concepts Section ===================== */}
    {/* ======================================================================= */}
    <section id="slicing-concepts" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">
          The Art of Extraction: Mastering Array Slicing
        </h2>
        <p className="mt-2 text-gray-400">
          Using the `start:stop:step` pattern to carve out any piece of data you
          need.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Card: 1D Slicing */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-orange-400 font-code">
            1. Basic 1D Slicing
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            The core `start:stop:step` syntax. Omitting `start` defaults to 0,
            `stop` to the end, and `step` to 1.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              arr = np.arange(8){"\n"}# Get elements from index 1 up to (not
              including) 7, in steps of 2{"\n"}sub_array = arr[1:7:2]
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-1 rounded flex space-x-1 border-orange-500/50">
                <div className="visual-item p-2 rounded">0</div>
                <div className="visual-item p-2 rounded bg-orange-900/50 border-orange-700">
                  1
                </div>
                <div className="visual-item p-2 rounded">2</div>
                <div className="visual-item p-2 rounded bg-orange-900/50 border-orange-700">
                  3
                </div>
                <div className="visual-item p-2 rounded">4</div>
                <div className="visual-item p-2 rounded bg-orange-900/50 border-orange-700">
                  5
                </div>
                <div className="visual-item p-2 rounded">6</div>
                <div className="visual-item p-2 rounded">7</div>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-1 rounded flex space-x-1 border-orange-500/50">
                <div className="visual-item p-2 rounded bg-orange-900/50 border-orange-700">
                  1
                </div>
                <div className="visual-item p-2 rounded bg-orange-900/50 border-orange-700">
                  3
                </div>
                <div className="visual-item p-2 rounded bg-orange-900/50 border-orange-700">
                  5
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: Multi-dimensional Slicing */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-pink-400 font-code">
            2. Multi-Dimensional Slicing
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Apply slicing independently across each dimension, separated by a
            comma.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              arr = np.arange(16).reshape(4, 4){"\n"}# All rows from index 2
              onwards, and columns from 0 up to 2{"\n"}sub_array = arr[2:, :2]
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-2 rounded border-pink-500/50">
                <div className="grid grid-cols-4 gap-1 text-xs">
                  <div className="visual-item p-1 text-center rounded">0</div>
                  <div className="visual-item p-1 text-center rounded">1</div>
                  <div className="visual-item p-1 text-center rounded">2</div>
                  <div className="visual-item p-1 text-center rounded">3</div>
                  <div className="visual-item p-1 text-center rounded">4</div>
                  <div className="visual-item p-1 text-center rounded">5</div>
                  <div className="visual-item p-1 text-center rounded">6</div>
                  <div className="visual-item p-1 text-center rounded">7</div>
                  <div className="visual-item p-1 text-center rounded bg-pink-900/50 border-pink-700">
                    8
                  </div>
                  <div className="visual-item p-1 text-center rounded bg-pink-900/50 border-pink-700">
                    9
                  </div>
                  <div className="visual-item p-1 text-center rounded">10</div>
                  <div className="visual-item p-1 text-center rounded">11</div>
                  <div className="visual-item p-1 text-center rounded bg-pink-900/50 border-pink-700">
                    12
                  </div>
                  <div className="visual-item p-1 text-center rounded bg-pink-900/50 border-pink-700">
                    13
                  </div>
                  <div className="visual-item p-1 text-center rounded">14</div>
                  <div className="visual-item p-1 text-center rounded">15</div>
                </div>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-2 rounded border-pink-500/50">
                <div className="grid grid-cols-2 gap-1 text-sm">
                  <div className="visual-item p-2 text-center rounded bg-pink-900/50 border-pink-700">
                    8
                  </div>
                  <div className="visual-item p-2 text-center rounded bg-pink-900/50 border-pink-700">
                    9
                  </div>
                  <div className="visual-item p-2 text-center rounded bg-pink-900/50 border-pink-700">
                    12
                  </div>
                  <div className="visual-item p-2 text-center rounded bg-pink-900/50 border-pink-700">
                    13
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: Modifying with Slices */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-red-500 font-code">
            3. Modifying with Slices (Views)
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Slices are <span className="text-red-400 font-semibold">views</span>
            , not copies. Assigning to a slice modifies the original array.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              arr = np.arange(6){"\n"}# Set elements from index 2 to 4 to a new
              value{"\n"}arr[2:5] = 99
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="visual-box p-1 rounded flex space-x-1 border-red-500/50">
                <div className="visual-item p-2 rounded">0</div>
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded bg-red-900/50 border-red-700">
                  2
                </div>
                <div className="visual-item p-2 rounded bg-red-900/50 border-red-700">
                  3
                </div>
                <div className="visual-item p-2 rounded bg-red-900/50 border-red-700">
                  4
                </div>
                <div className="visual-item p-2 rounded">5</div>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-1 rounded flex space-x-1 border-red-500/50">
                <div className="visual-item p-2 rounded">0</div>
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded bg-red-600 border-red-400">
                  99
                </div>
                <div className="visual-item p-2 rounded bg-red-600 border-red-400">
                  99
                </div>
                <div className="visual-item p-2 rounded bg-red-600 border-red-400">
                  99
                </div>
                <div className="visual-item p-2 rounded">5</div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: Combining Indexing & Slicing */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-blue-400 font-code">
            4. Combining Indexing &amp; Slicing
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Mix integer indexing with slicing to select specific rows/columns
            and ranges simultaneously.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              arr = np.arange(16).reshape(4, 4){"\n"}# From row 2, get all
              columns from index 1 onwards{"\n"}sub_array = arr[2, 1:]
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="visual-box p-2 rounded border-blue-500/50">
                <div className="grid grid-cols-4 gap-1 text-xs">
                  <div className="visual-item p-1 text-center rounded">0</div>
                  <div className="visual-item p-1 text-center rounded">1</div>
                  <div className="visual-item p-1 text-center rounded">2</div>
                  <div className="visual-item p-1 text-center rounded">3</div>
                  <div className="visual-item p-1 text-center rounded">4</div>
                  <div className="visual-item p-1 text-center rounded">5</div>
                  <div className="visual-item p-1 text-center rounded">6</div>
                  <div className="visual-item p-1 text-center rounded">7</div>
                  <div className="visual-item p-1 text-center rounded">8</div>
                  <div className="visual-item p-1 text-center rounded bg-blue-900/50 border-blue-700">
                    9
                  </div>
                  <div className="visual-item p-1 text-center rounded bg-blue-900/50 border-blue-700">
                    10
                  </div>
                  <div className="visual-item p-1 text-center rounded bg-blue-900/50 border-blue-700">
                    11
                  </div>
                  <div className="visual-item p-1 text-center rounded">12</div>
                  <div className="visual-item p-1 text-center rounded">13</div>
                  <div className="visual-item p-1 text-center rounded">14</div>
                  <div className="visual-item p-1 text-center rounded">15</div>
                </div>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-1 rounded flex space-x-1 border-blue-500/50">
                <div className="visual-item p-2 rounded bg-blue-900/50 border-blue-700">
                  9
                </div>
                <div className="visual-item p-2 rounded bg-blue-900/50 border-blue-700">
                  10
                </div>
                <div className="visual-item p-2 rounded bg-blue-900/50 border-blue-700">
                  11
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ======================================================================= */}
    {/* ================== END: Slicing Concepts Section ====================== */}
    {/* ======================================================================= */}
    {/* ======================================================================= */}
    {/* ============= START: Mathematical Operations Section ================== */}
    {/* ======================================================================= */}
    <section id="mathematical-operations" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">
          Unleashing the Calculator: Mathematical Operations
        </h2>
        <p className="mt-2 text-gray-400">
          From simple arithmetic to complex linear algebra, the core of NumPy's
          power.
        </p>
      </div>
      {/* Sub-section for Basic Arithmetic */}
      <h3 className="text-2xl font-semibold text-sky-400 mb-6">
        1. Basic Arithmetic: Operator vs. Universal Function
      </h3>
      <p className="text-center text-gray-400 max-w-3xl mx-auto mb-10">
        NumPy lets you use standard math operators for convenience. It also
        provides "universal functions" (ufuncs) like `np.add` which offer more
        flexibility (e.g., specifying output arrays) and are recommended for
        writing clear, robust code.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card: add/subtract */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-emerald-400 font-code">
            Addition &amp; Subtraction
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            `+` vs `np.add` and `-` vs `np.subtract`
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              a = np.array([5, 8]); b = np.array([2, 3]){"\n"}add_result = a + b
              {"       "}# or np.add(a, b){"\n"}sub_result = a - b{"       "}#
              or np.subtract(a, b)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">
              Visualization (Addition):
            </p>
            <div className="flex items-center justify-center space-x-2">
              <div className="visual-box p-1 rounded flex space-x-1 border-emerald-500/50">
                <div className="visual-item p-2 rounded">5</div>
                <div className="visual-item p-2 rounded">8</div>
              </div>
              <span className="text-2xl font-bold text-gray-400">+</span>
              <div className="visual-box p-1 rounded flex space-x-1 border-emerald-500/50">
                <div className="visual-item p-2 rounded">2</div>
                <div className="visual-item p-2 rounded">3</div>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-1 rounded flex space-x-1 border-emerald-500/50">
                <div className="visual-item p-2 rounded bg-emerald-600 border-emerald-400">
                  7
                </div>
                <div className="visual-item p-2 rounded bg-emerald-600 border-emerald-400">
                  11
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: multiply/divide */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-amber-400 font-code">
            Multiplication &amp; Division
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            `*` vs `np.multiply` and `/` vs `np.divide`
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              a = np.array([6, 10]); b = np.array([2, 5]){"\n"}mul_result = a *
              b{"      "}# or np.multiply(a, b){"\n"}div_result = a / b
              {"      "}# or np.divide(a, b)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">
              Visualization (Multiplication):
            </p>
            <div className="flex items-center justify-center space-x-2">
              <div className="visual-box p-1 rounded flex space-x-1 border-amber-500/50">
                <div className="visual-item p-2 rounded">6</div>
                <div className="visual-item p-2 rounded">10</div>
              </div>
              <span className="text-2xl font-bold text-gray-400">*</span>
              <div className="visual-box p-1 rounded flex space-x-1 border-amber-500/50">
                <div className="visual-item p-2 rounded">2</div>
                <div className="visual-item p-2 rounded">5</div>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-1 rounded flex space-x-1 border-amber-500/50">
                <div className="visual-item p-2 rounded bg-amber-600 border-amber-400">
                  12
                </div>
                <div className="visual-item p-2 rounded bg-amber-600 border-amber-400">
                  50
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card: power/remainder */}
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-rose-400 font-code">
            Power &amp; Remainder
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            `**` vs `np.power` and `%` vs `np.remainder`
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              a = np.array([2, 10]); b = np.array([3, 3]){"\n"}pow_result = a **
              b{"     "}# or np.power(a, b){"\n"}rem_result = a % b{"      "}#
              or np.remainder(a, b)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization (Power):</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="visual-box p-1 rounded flex space-x-1 border-rose-500/50">
                <div className="visual-item p-2 rounded">2</div>
                <div className="visual-item p-2 rounded">10</div>
              </div>
              <span className="text-2xl font-bold text-gray-400">**</span>
              <div className="visual-box p-1 rounded flex space-x-1 border-rose-500/50">
                <div className="visual-item p-2 rounded">3</div>
                <div className="visual-item p-2 rounded">3</div>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-1 rounded flex space-x-1 border-rose-500/50 text-xs">
                <div className="visual-item p-2 rounded bg-rose-600 border-rose-400">
                  8
                </div>
                <div className="visual-item p-2 rounded bg-rose-600 border-rose-400">
                  1000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sub-section for Rounding */}
      <h3 className="text-2xl font-semibold text-sky-400 mt-16 mb-6">
        2. Rounding &amp; Approximation
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-cyan-400 font-code">
            np.round / np.around
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Round to a given number of decimals (to nearest even for .5 cases).
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              arr = np.array([1.2, 3.7, 5.5]){"\n"}result = np.round(arr)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="visual-box p-1 rounded flex space-x-1 border-cyan-500/50 text-xs">
                <div className="visual-item p-2 rounded">1.2</div>
                <div className="visual-item p-2 rounded">3.7</div>
                <div className="visual-item p-2 rounded">5.5</div>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-1 rounded flex space-x-1 border-cyan-500/50">
                <div className="visual-item p-2 rounded bg-cyan-600 border-cyan-400">
                  1.
                </div>
                <div className="visual-item p-2 rounded bg-cyan-600 border-cyan-400">
                  4.
                </div>
                <div className="visual-item p-2 rounded bg-cyan-600 border-cyan-400">
                  6.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-cyan-400 font-code">
            np.floor &amp; np.ceil
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Round down to the nearest integer (`floor`) or up (`ceil`).
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              arr = np.array([1.2, 3.7]){"\n"}floor_res = np.floor(arr) # [1.,
              3.]{"\n"}ceil_res = np.ceil(arr){"   "}# [2., 4.]
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization (floor):</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="visual-box p-1 rounded flex space-x-1 border-cyan-500/50 text-xs">
                <div className="visual-item p-2 rounded">1.2</div>
                <div className="visual-item p-2 rounded">3.7</div>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-1 rounded flex space-x-1 border-cyan-500/50">
                <div className="visual-item p-2 rounded bg-cyan-600 border-cyan-400">
                  1.
                </div>
                <div className="visual-item p-2 rounded bg-cyan-600 border-cyan-400">
                  3.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-cyan-400 font-code">
            np.trunc / np.fix
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Discard the fractional part, rounding towards zero.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              arr = np.array([-1.7, 1.2]){"\n"}result = np.trunc(arr)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="visual-box p-1 rounded flex space-x-1 border-cyan-500/50 text-xs">
                <div className="visual-item p-2 rounded">-1.7</div>
                <div className="visual-item p-2 rounded">1.2</div>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-1 rounded flex space-x-1 border-cyan-500/50">
                <div className="visual-item p-2 rounded bg-cyan-600 border-cyan-400">
                  -1.
                </div>
                <div className="visual-item p-2 rounded bg-cyan-600 border-cyan-400">
                  1.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sub-section for Logs & Exponents */}
      <h3 className="text-2xl font-semibold text-sky-400 mt-16 mb-6">
        3. Exponential &amp; Logarithmic
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-lime-400 font-code">
            np.exp &amp; np.log
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Base-e exponential (`e^x`) and the natural logarithm.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              arr = np.array([1, 2]){"\n"}exp_res = np.exp(arr){"  "}# [2.718,
              7.389]{"\n"}log_res = np.log(exp_res) # [1., 2.]
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization (exp):</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="visual-box p-1 rounded flex space-x-1 border-lime-500/50">
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">2</div>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-1 rounded flex space-x-1 border-lime-500/50 text-xs">
                <div className="visual-item p-2 rounded bg-lime-600 border-lime-400">
                  2.72
                </div>
                <div className="visual-item p-2 rounded bg-lime-600 border-lime-400">
                  7.39
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-lime-400 font-code">
            np.log10 &amp; np.log2
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Logarithms for base 10 and base 2.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              arr = np.array([10, 1000]){"\n"}log10_res = np.log10(arr) # [1.,
              3.]
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization (log10):</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="visual-box p-1 rounded flex space-x-1 border-lime-500/50 text-xs">
                <div className="visual-item p-2 rounded">10</div>
                <div className="visual-item p-2 rounded">1000</div>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-1 rounded flex space-x-1 border-lime-500/50">
                <div className="visual-item p-2 rounded bg-lime-600 border-lime-400">
                  1.
                </div>
                <div className="visual-item p-2 rounded bg-lime-600 border-lime-400">
                  3.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-lime-400 font-code">
            np.expm1 &amp; np.log1p
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            `exp(x)-1` and `log(1+x)`. Give better precision for small `x`.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              small_x = 1e-9{"\n"}# More precise than np.log(1 + small_x){"\n"}
              result = np.log1p(small_x)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">
              Benefit: High Precision
            </p>
            <div className="text-center p-2 bg-gray-900 rounded-md border-lime-500/50 border">
              <p className="text-lime-300 text-sm">
                Prevents loss of precision when `x` is close to zero.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Sub-section for Trigonometry */}
      <h3 className="text-2xl font-semibold text-sky-400 mt-16 mb-6">
        4. Trigonometric &amp; Angle Functions
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-fuchsia-400 font-code">
            np.sin / cos / tan
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Standard trig functions. Input is assumed to be in radians.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              rads = np.array([0, np.pi/2]){"\n"}sin_res = np.sin(rads) # [0.,
              1.]
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization (sin):</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="visual-box p-1 rounded flex space-x-1 border-fuchsia-500/50 text-xs">
                <div className="visual-item p-2 rounded">0</div>
                <div className="visual-item p-2 rounded">π/2</div>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-1 rounded flex space-x-1 border-fuchsia-500/50">
                <div className="visual-item p-2 rounded bg-fuchsia-600 border-fuchsia-400">
                  0.
                </div>
                <div className="visual-item p-2 rounded bg-fuchsia-600 border-fuchsia-400">
                  1.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-fuchsia-400 font-code">
            np.deg2rad &amp; np.rad2deg
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Conveniently convert between degrees and radians.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              degrees = 180{"\n"}radians = np.deg2rad(degrees)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="visual-box p-1 rounded flex space-x-1 border-fuchsia-500/50">
                <div className="visual-item p-2 rounded">180°</div>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-1 rounded flex space-x-1 border-fuchsia-500/50">
                <div className="visual-item p-2 rounded bg-fuchsia-600 border-fuchsia-400">
                  3.14 (π)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-fuchsia-400 font-code">
            np.hypot / arctan2
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            `hypot(x,y)` is `sqrt(x²+y²)`. `arctan2(y,x)` is `atan(y/x)` but
            handles quadrants correctly.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              base = 3; height = 4{"\n"}hypotenuse = np.hypot(base, height)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization (hypot):</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="visual-box p-1 rounded flex space-x-1 border-fuchsia-500/50">
                <div className="visual-item p-2 rounded">3</div>
                <div className="visual-item p-2 rounded">4</div>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-1 rounded flex space-x-1 border-fuchsia-500/50">
                <div className="visual-item p-2 rounded bg-fuchsia-600 border-fuchsia-400">
                  5.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sub-section for Stats */}
      <h3 className="text-2xl font-semibold text-sky-400 mt-16 mb-6">
        5. Aggregations &amp; Statistical Functions
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-green-400 font-code">
            np.sum &amp; np.prod
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Compute the sum or product of all elements in an array.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              arr = np.array([1, 2, 3, 4]){"\n"}total = np.sum(arr) # 10
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization (sum):</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="visual-box p-1 rounded flex space-x-1 border-green-500/50">
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">2</div>
                <div className="visual-item p-2 rounded">3</div>
                <div className="visual-item p-2 rounded">4</div>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-1 rounded flex space-x-1 border-green-500/50">
                <div className="visual-item p-2 rounded bg-green-600 border-green-400">
                  10
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-green-400 font-code">
            np.cumsum &amp; np.cumprod
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Compute the cumulative sum or product.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              arr = np.array([1, 2, 3, 4]){"\n"}cumulative = np.cumsum(arr)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">
              Visualization (cumsum):
            </p>
            <div className="flex items-center justify-center space-x-2">
              <div className="visual-box p-1 rounded flex space-x-1 border-green-500/50">
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">2</div>
                <div className="visual-item p-2 rounded">3</div>
                <div className="visual-item p-2 rounded">4</div>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-1 rounded flex space-x-1 border-green-500/50 text-xs">
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">3</div>
                <div className="visual-item p-2 rounded">6</div>
                <div className="visual-item p-2 rounded">10</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-green-400 font-code">
            np.mean / median / std
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Calculate mean (average), median (middle value), and standard
            deviation.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              arr = np.array([1, 2, 3, 10]){"\n"}avg = np.mean(arr) # 4.0{"\n"}
              med = np.median(arr) # 2.5
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">
              Visualization (median):
            </p>
            <div className="flex items-center justify-center space-x-2">
              <div className="visual-box p-1 rounded flex space-x-1 border-green-500/50">
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">2</div>
                <div className="visual-item p-2 rounded">3</div>
                <div className="visual-item p-2 rounded">10</div>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-1 rounded flex space-x-1 border-green-500/50">
                <div className="visual-item p-2 rounded bg-green-600 border-green-400">
                  2.5
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-green-400 font-code">
            np.min / max / ptp
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Find the minimum, maximum, or peak-to-peak (`max-min`) range.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              arr = np.array([5, 1, 9, 2]){"\n"}peak_range = np.ptp(arr) # 9-1=8
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization (ptp):</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="visual-box p-1 rounded flex space-x-1 border-green-500/50">
                <div className="visual-item p-2 rounded">5</div>
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded">9</div>
                <div className="visual-item p-2 rounded">2</div>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-1 rounded flex space-x-1 border-green-500/50">
                <div className="visual-item p-2 rounded bg-green-600 border-green-400">
                  8
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-green-400 font-code">
            np.argmin / argmax
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Find the index (position) of the minimum or maximum value.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              arr = np.array([5, 1, 9, 2]){"\n"}max_idx = np.argmax(arr) # 2
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">
              Visualization (argmax):
            </p>
            <div className="flex items-center justify-center space-x-2">
              <div className="visual-box p-1 rounded flex space-x-1 border-green-500/50 relative">
                <div className="visual-item p-2 rounded">5</div>
                <div className="visual-item p-2 rounded">1</div>
                <div className="visual-item p-2 rounded bg-green-900/50 border-green-700">
                  9
                </div>
                <div className="visual-item p-2 rounded">2</div>
                <div className="absolute -bottom-4 text-xs text-gray-400 flex w-full justify-around">
                  <span>0</span>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                </div>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-1 rounded flex space-x-1 border-green-500/50">
                <div className="visual-item p-2 rounded bg-green-600 border-green-400">
                  2
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-green-400 font-code">
            np.percentile / quantile
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Find values at a specific percentile (0-100) or quantile (0-1).
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              arr = np.arange(1, 101){"\n"}# Find the 75th percentile{"\n"}p75 =
              np.percentile(arr, 75)
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="visual-box p-1 rounded flex space-x-1 border-green-500/50 text-xs">
                <div className="visual-item p-2 rounded">1..</div>
                <div className="visual-item p-2 rounded">..100</div>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-1 rounded flex space-x-1 border-green-500/50">
                <div className="visual-item p-2 rounded bg-green-600 border-green-400">
                  75.0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sub-section for Linear Algebra */}
      <h3 className="text-2xl font-semibold text-sky-400 mt-16 mb-6">
        6. Linear Algebra
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-red-500 font-code">
            np.dot / matmul / @
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Dot product and matrix multiplication. The `@` operator is shorthand
            for `np.matmul`.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              A = np.array([[1,2],[3,4]]){"\n"}B = np.eye(2){"\n"}C = A @ B
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">
              Visualization (matmul):
            </p>
            <div className="flex items-center justify-center space-x-2">
              <div className="text-xs text-center">2x2</div>
              <div className="visual-box p-1 rounded">...</div>
              <div className="text-2xl font-bold text-red-400">@</div>
              <div className="text-xs text-center">2x2</div>
              <div className="visual-box p-1 rounded">...</div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="text-xs text-center">2x2</div>
              <div className="visual-box p-1 rounded">...</div>
            </div>
          </div>
        </div>
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-red-500 font-code">
            np.linalg.inv &amp; det
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Calculate the inverse and determinant of a square matrix.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              A = np.array([[1,2],[3,4]]){"\n"}determinant = np.linalg.det(A) #
              -2.0
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization (det):</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="visual-box p-2 rounded border-red-500/50">
                <div className="grid grid-cols-2 gap-1">
                  <div className="visual-item p-2 text-center rounded">1</div>
                  <div className="visual-item p-2 text-center rounded">2</div>
                  <div className="visual-item p-2 text-center rounded">3</div>
                  <div className="visual-item p-2 text-center rounded">4</div>
                </div>
              </div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="visual-box p-1 rounded flex space-x-1 border-red-500/50">
                <div className="visual-item p-2 rounded bg-red-600 border-red-400">
                  -2.0
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded-lg p-6">
          <h4 className="text-xl font-bold text-red-500 font-code">
            np.linalg.solve
          </h4>
          <p className="text-gray-400 mt-1 mb-4">
            Solve a system of linear equations, `Ax = b`, for `x`.
          </p>
          <pre className="bg-slate-800 p-3 rounded-md overflow-x-auto">
            <code className="font-code text-sm text-yellow-300">
              # 2x + y = 1; x + y = 1{"\n"}A = np.array([[2,1],[1,1]]){"\n"}b =
              np.array([1, 1]){"\n"}x = np.linalg.solve(A, b) # [0., 1.]
            </code>
          </pre>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Visualization:</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="text-red-400 font-bold">A</div>
              <div className="visual-box p-1 rounded">..</div>
              <div className="text-red-400 font-bold">x</div> ={" "}
              <div className="text-red-400 font-bold">b</div>
              <div className="visual-box p-1 rounded">..</div>
              <span className="arrow text-2xl font-bold text-gray-400">→</span>
              <div className="text-red-400 font-bold">x</div>
              <div className="visual-box p-1 rounded">..</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ======================================================================= */}
    {/* ============== END: Mathematical Operations Section =================== */}
    {/* ======================================================================= */}
  </main>
  {/* Footer */}
  <footer className="text-center py-10 mt-16 border-t border-gray-800">
    <p className="text-gray-500">
      Created to make NumPy mastery accessible and visual.
    </p>
  </footer>
</>

    </div>
  );
}

export default NumpyHome;