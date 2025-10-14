import React from 'react';

// Tailwind CSS classes are assumed to be available globally.

// Helper component to render the runnable code block simulation
const LiveCodeSandbox = ({ code, language = 'python', buttonText = 'Run Example Code' }) => (
  <div className="mt-8 p-5 bg-slate-900/80 border border-violet-700/50 rounded-xl shadow-inner shadow-black/20 transition duration-300">
    <h5 className="flex items-center text-sm font-extrabold text-violet-400 mb-3 border-b border-violet-800 pb-2 uppercase tracking-widest">
        <span className="mr-2 text-xl">🔬</span> LIVE SANDBOX
    </h5>
    <pre className="overflow-x-auto max-h-48">
      <code className={`language-${language} font-code text-xs sm:text-sm text-yellow-300 whitespace-pre-wrap`}>
        {code}
      </code>
    </pre>
    <button className="mt-4 w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold py-3 px-4 rounded-xl transition duration-300 shadow-lg shadow-violet-800/50 text-base">
      {buttonText}
    </button>
  </div>
);

// Helper component for the content cards
const MathCard = ({ title, colorClass, operator, description, syntax, visualization, code, visTitle }) => (
  <div className="card rounded-2xl p-6 bg-slate-800 border border-slate-700 shadow-2xl hover:border-indigo-500 hover:shadow-indigo-500/20 transition duration-300 h-full flex flex-col">
    <h4 className={`text-2xl font-black ${colorClass} font-code border-b border-slate-700 pb-3 mb-4`}>
      {title}
    </h4>
    <p className="text-sm font-medium text-gray-300 mb-4">{operator}</p>
    <p className="text-gray-400 mb-6 text-base flex-grow">{description}</p>
    
    {/* Syntax Snippet */}
    <h5 className="text-sm font-semibold text-gray-300 mb-2 mt-4">Syntax:</h5>
    <pre className="bg-slate-900/90 p-3 rounded-md overflow-x-auto border border-slate-700">
      <code className="font-code text-xs text-yellow-300">
        {syntax}
      </code>
    </pre>

    {/* Live Code Sandbox */}
    <LiveCodeSandbox code={code} />

    {/* Visualization */}
    <div className="mt-8 pt-4 border-t border-slate-700">
      <p className="text-sm font-bold text-gray-500 mb-4">{visTitle}:</p>
      <div className="flex flex-wrap items-center justify-center space-x-3 text-xs sm:text-sm">
        {visualization}
      </div>
    </div>
  </div>
);

// Main Application Component
const NumpyIntro = () => {

  // Enhanced visual styles for dark mode compatibility
  const visualStyle = (bgColor, borderColor) => 
    `visual-item px-3 py-2 rounded-lg font-bold text-white bg-${bgColor}-700 border border-${borderColor}-400`;
  
  const boxStyle = (borderColor) => 
    `visual-box p-1 rounded-xl flex space-x-2 border-2 border-${borderColor}-500/80 bg-slate-900/70 items-center justify-center shadow-lg`;
  
  const arrowStyle = "text-2xl font-bold text-indigo-400 mx-3";


  // --- Data for Cards ---

  const basicArithmetic = [
    {
      title: 'Addition & Subtraction',
      colorClass: 'text-emerald-400',
      operator: '`+` vs `np.add` and `-` vs `np.subtract`',
      description: 'The standard arithmetic operators perform element-wise addition and subtraction on NumPy arrays.',
      syntax: 'a = np.array([5, 8]); b = np.array([2, 3])\nadd_result = a + b \nsub_result = np.subtract(a, b)',
      code: `import numpy as np
a = np.array([5, 8])
b = np.array([2, 3])
print(f"A: {a}, B: {b}")

# Operator syntax
sum_op = a + b
print(f"A + B: {sum_op})

# Universal Function (ufunc) syntax
diff_ufunc = np.subtract(a, b)
print(f"A - B: {diff_ufunc}")`,
      visTitle: 'Visualization (Addition):',
      visualization: (
        <>
          <div className={boxStyle('emerald')}>
            <div className="visual-item p-2 rounded">5</div>
            <div className="visual-item p-2 rounded">8</div>
          </div>
          <span className={arrowStyle}>+</span>
          <div className={boxStyle('emerald')}>
            <div className="visual-item p-2 rounded">2</div>
            <div className="visual-item p-2 rounded">3</div>
          </div>
          <span className={arrowStyle}>→</span>
          <div className={boxStyle('emerald')}>
            <div className={visualStyle('emerald', 'emerald')}>7</div>
            <div className={visualStyle('emerald', 'emerald')}>11</div>
          </div>
        </>
      )
    },
    {
      title: 'Multiplication & Division',
      colorClass: 'text-amber-400',
      operator: '`*` vs `np.multiply` and `/` vs `np.divide`',
      description: 'Element-wise multiplication and division. Note: `*` is NOT matrix multiplication (use `@` for that).',
      syntax: 'a = np.array([6, 10]); b = np.array([2, 5])\nmul_result = a * b\ndiv_result = np.divide(a, b)',
      code: `import numpy as np
a = np.array([6, 10])
b = np.array([2, 5])
print(f"A: {a}, B: {b}")

# Element-wise multiplication
product = a * b
print(f"A * B: {product}")

# Element-wise division
quotient = a / b
print(f"A / B: {quotient}")`,
      visTitle: 'Visualization (Multiplication):',
      visualization: (
        <>
          <div className={boxStyle('amber')}>
            <div className="visual-item p-2 rounded">6</div>
            <div className="visual-item p-2 rounded">10</div>
          </div>
          <span className={arrowStyle}>*</span>
          <div className={boxStyle('amber')}>
            <div className="visual-item p-2 rounded">2</div>
            <div className="visual-item p-2 rounded">5</div>
          </div>
          <span className={arrowStyle}>→</span>
          <div className={boxStyle('amber')}>
            <div className={visualStyle('amber', 'amber')}>12</div>
            <div className={visualStyle('amber', 'amber')}>50</div>
          </div>
        </>
      )
    },
    {
      title: 'Power & Remainder',
      colorClass: 'text-rose-400',
      operator: '`**` vs `np.power` and `%` vs `np.remainder`',
      description: 'Calculates exponents element-wise and computes the remainder after division (modulo operation).',
      syntax: 'a = np.array([2, 10]); b = np.array([3, 3])\npow_result = a ** b\nrem_result = np.remainder(a, b)',
      code: `import numpy as np
a = np.array([2, 10])
b = np.array([3, 3])
print(f"A: {a}, B: {b}")

# Element-wise power
power_res = a ** b
print(f"A ** B: {power_res}")

# Element-wise remainder (modulo)
rem_res = 10 % 3
print(f"10 % 3: {rem_res}")`,
      visTitle: 'Visualization (Power):',
      visualization: (
        <>
          <div className={boxStyle('rose')}>
            <div className="visual-item p-2 rounded">2</div>
            <div className="visual-item p-2 rounded">10</div>
          </div>
          <span className={arrowStyle}>**</span>
          <div className={boxStyle('rose')}>
            <div className="visual-item p-2 rounded">3</div>
            <div className="visual-item p-2 rounded">3</div>
          </div>
          <span className={arrowStyle}>→</span>
          <div className={boxStyle('rose')}>
            <div className={visualStyle('rose', 'rose')}>8</div>
            <div className={visualStyle('rose', 'rose')}>1000</div>
          </div>
        </>
      )
    }
  ];

  const roundingOps = [
    {
      title: 'np.round / np.around',
      colorClass: 'text-cyan-400',
      operator: 'Round to a given number of decimals (to nearest even for .5 cases).',
      description: 'Rounds values element-wise. You can specify the number of decimals: `np.round(arr, decimals=1)`.',
      syntax: 'arr = np.array([1.2, 3.7, 5.5])\nresult = np.round(arr)',
      code: `import numpy as np
arr = np.array([1.2, 3.7, 5.5])
print(f"Original: {arr}")

# Round to nearest integer (0 decimals)
result_0 = np.round(arr)
print(f"Round (0 dec): {result_0}")

# Note: 5.5 rounds to the nearest even integer, which is 6.`,
      visTitle: 'Visualization (np.round):',
      visualization: (
        <>
          <div className={boxStyle('cyan')}>
            <div className="visual-item p-2 rounded">1.2</div>
            <div className="visual-item p-2 rounded">3.7</div>
            <div className="visual-item p-2 rounded">5.5</div>
          </div>
          <span className={arrowStyle}>→</span>
          <div className={boxStyle('cyan')}>
            <div className={visualStyle('cyan', 'cyan')}>1.</div>
            <div className={visualStyle('cyan', 'cyan')}>4.</div>
            <div className={visualStyle('cyan', 'cyan')}>6.</div>
          </div>
        </>
      )
    },
    {
      title: 'np.floor & np.ceil',
      colorClass: 'text-cyan-400',
      operator: 'Round down to the nearest integer (`floor`) or up (`ceil`).',
      description: '`floor` always rounds toward negative infinity; `ceil` always rounds toward positive infinity.',
      syntax: 'arr = np.array([1.2, 3.7])\nfloor_res = np.floor(arr)\nceil_res = np.ceil(arr)',
      code: `import numpy as np
arr = np.array([1.2, 3.7, -1.9])
print(f"Original: {arr}")

# Round down
floor_res = np.floor(arr)
print(f"Floor: {floor_res}")

# Round up
ceil_res = np.ceil(arr)
print(f"Ceil: {ceil_res}")`,
      visTitle: 'Visualization (Floor/Ceil):',
      visualization: (
        <>
          <div className={boxStyle('cyan')}>
            <div className="visual-item p-2 rounded">1.2</div>
            <div className="visual-item p-2 rounded">3.7</div>
          </div>
          <span className={arrowStyle}>Floor</span>
          <div className={boxStyle('cyan')}>
            <div className={visualStyle('cyan', 'cyan')}>1.</div>
            <div className={visualStyle('cyan', 'cyan')}>3.</div>
          </div>
          <span className={arrowStyle}>Ceil</span>
          <div className={boxStyle('cyan')}>
            <div className={visualStyle('cyan', 'cyan')}>2.</div>
            <div className={visualStyle('cyan', 'cyan')}>4.</div>
          </div>
        </>
      )
    },
    {
      title: 'np.trunc / np.fix',
      colorClass: 'text-cyan-400',
      operator: 'Discard the fractional part, rounding towards zero.',
      description: 'Removes the decimal part. Behaves like `floor` for positive numbers and `ceil` for negative numbers.',
      syntax: 'arr = np.array([-1.7, 1.2])\nresult = np.trunc(arr)',
      code: `import numpy as np
arr = np.array([-1.7, 1.2, 5.9])
print(f"Original: {arr}")

# Truncate decimals (rounds toward zero)
trunc_res = np.trunc(arr)
print(f"Truncated: {trunc_res}")`,
      visTitle: 'Visualization (np.trunc):',
      visualization: (
        <>
          <div className={boxStyle('cyan')}>
            <div className="visual-item p-2 rounded">-1.7</div>
            <div className="visual-item p-2 rounded">1.2</div>
          </div>
          <span className={arrowStyle}>→</span>
          <div className={boxStyle('cyan')}>
            <div className={visualStyle('cyan', 'cyan')}>-1.</div>
            <div className={visualStyle('cyan', 'cyan')}>1.</div>
          </div>
        </>
      )
    }
  ];

  const logExponents = [
    {
      title: 'np.exp & np.log',
      colorClass: 'text-lime-400',
      operator: 'Base-e exponential ($\mathrm{e}^x$) and the natural logarithm.',
      description: 'Performs the exponential function $\mathrm{e}^x$ and its inverse, the natural logarithm $\ln(x)$, element-wise.',
      syntax: 'arr = np.array([1, 2])\nexp_res = np.exp(arr)\nlog_res = np.log(exp_res)',
      code: `import numpy as np
arr = np.array([0, 1, np.log(10)])
print(f"Original: {arr}")

# Exponential (e^x)
exp_res = np.exp(arr)
print(f"np.exp(arr): {np.round(exp_res, 2)}")

# Natural log (log base e)
log_res = np.log(exp_res)
print(f"np.log(exp_res): {np.round(log_res, 2)}")`,
      visTitle: 'Visualization (np.exp):',
      visualization: (
        <>
          <div className={boxStyle('lime')}>
            <div className="visual-item p-2 rounded">1</div>
            <div className="visual-item p-2 rounded">2</div>
          </div>
          <span className={arrowStyle}>→</span>
          <div className={boxStyle('lime')}>
            <div className={visualStyle('lime', 'lime')}>2.72</div>
            <div className={visualStyle('lime', 'lime')}>7.39</div>
          </div>
        </>
      )
    },
    {
      title: 'np.log10 & np.log2',
      colorClass: 'text-lime-400',
      operator: 'Logarithms for base 10 ($\log_{10}$) and base 2 ($\log_{2}$).',
      description: 'Calculates the base 10 logarithm ($\log_{10}(x)$) and the base 2 logarithm ($\log_{2}(x)$).',
      syntax: 'arr = np.array([10, 1000])\nlog10_res = np.log10(arr)',
      code: `import numpy as np
arr = np.array([10, 100, 8])
print(f"Original: {arr}")

# Log base 10
log10_res = np.log10(arr)
print(f"np.log10: {log10_res}")

# Log base 2
log2_res = np.log2(arr)
print(f"np.log2 (of 8): {log2_res[2]}")`,
      visTitle: 'Visualization (np.log10):',
      visualization: (
        <>
          <div className={boxStyle('lime')}>
            <div className="visual-item p-2 rounded">10</div>
            <div className="visual-item p-2 rounded">1000</div>
          </div>
          <span className={arrowStyle}>→</span>
          <div className={boxStyle('lime')}>
            <div className={visualStyle('lime', 'lime')}>1.</div>
            <div className={visualStyle('lime', 'lime')}>3.</div>
          </div>
        </>
      )
    },
    {
      title: 'np.expm1 & np.log1p',
      colorClass: 'text-lime-400',
      operator: '$\mathrm{e}^x-1$ and $\ln(1+x)$. Gives better precision for small $x$.',
      description: 'Specialized functions that offer higher precision when the input $x$ is close to zero, avoiding catastrophic cancellation.',
      syntax: 'small_x = 1e-9\n# More precise than np.log(1 + small_x)\nresult = np.log1p(small_x)',
      code: `import numpy as np
small_x = 1e-15
print(f"Small x: {small_x}")

# np.log(1 + x) loses precision near x=0
log_normal = np.log(1 + small_x)
print(f"np.log(1 + x): {log_normal}")

# np.log1p(x) maintains precision
log_precise = np.log1p(small_x)
print(f"np.log1p(x): {log_precise}")`,
      visTitle: 'Benefit:',
      visualization: (
        <div className="text-center p-2 bg-gray-900 rounded-md border-lime-500/50 border w-full">
          <p className="text-lime-300 text-sm">
            Prevents loss of precision when $x$ is very small.
          </p>
        </div>
      )
    }
  ];

  const trigFunctions = [
    {
      title: 'np.sin / cos / tan',
      colorClass: 'text-fuchsia-400',
      operator: 'Standard trig functions. Input is assumed to be in **radians**.',
      description: 'Calculates the sine, cosine, and tangent of array elements, essential for wave processing and geometry.',
      syntax: 'rads = np.array([0, np.pi/2])\nsin_res = np.sin(rads)',
      code: `import numpy as np
# np.pi is NumPy's constant for $\\pi$
angles_rad = np.array([0, np.pi / 4, np.pi / 2])
print(f"Angles (rad): {angles_rad}")

sin_res = np.sin(angles_rad)
print(f"Sine: {np.round(sin_res, 2)}")

cos_res = np.cos(angles_rad)
print(f"Cosine: {np.round(cos_res, 2)}")`,
      visTitle: 'Visualization (np.sin):',
      visualization: (
        <>
          <div className={boxStyle('fuchsia')}>
            <div className="visual-item p-2 rounded">0</div>
            <div className="visual-item p-2 rounded">$\\pi/2$</div>
          </div>
          <span className={arrowStyle}>→</span>
          <div className={boxStyle('fuchsia')}>
            <div className={visualStyle('fuchsia', 'fuchsia')}>0.</div>
            <div className={visualStyle('fuchsia', 'fuchsia')}>1.</div>
          </div>
        </>
      )
    },
    {
      title: 'np.deg2rad & np.rad2deg',
      colorClass: 'text-fuchsia-400',
      operator: 'Conveniently convert between degrees and radians.',
      description: 'Utility functions to easily convert angle units, as most NumPy trig functions expect radians.',
      syntax: 'degrees = 180\nradians = np.deg2rad(degrees)',
      code: `import numpy as np
degrees = np.array([0, 90, 180, 270])
print(f"Degrees: {degrees}")

# Convert degrees to radians
radians = np.deg2rad(degrees)
print(f"Radians: {np.round(radians, 2)}")

# Convert radians back to degrees
back_to_deg = np.rad2deg(radians)
print(f"Degrees back: {back_to_deg}")`,
      visTitle: 'Visualization (deg $\\to$ rad):',
      visualization: (
        <>
          <div className={boxStyle('fuchsia')}>
            <div className="visual-item p-2 rounded">180°</div>
          </div>
          <span className={arrowStyle}>→</span>
          <div className={boxStyle('fuchsia')}>
            <div className={visualStyle('fuchsia', 'fuchsia')}>$\\pi$</div>
          </div>
        </>
      )
    },
    {
      title: 'np.hypot / arctan2',
      colorClass: 'text-fuchsia-400',
      operator: '$\mathrm{hypot}(x,y)$ is $\\sqrt{x^2+y^2}$. $\mathrm{arctan2}(y,x)$ handles quadrants correctly.',
      description: 'Used in physics and geometry. `hypot` computes the hypotenuse length, and `arctan2` computes the angle in all four quadrants.',
      syntax: 'base = 3; height = 4\nhypotenuse = np.hypot(base, height)',
      code: `import numpy as np
# For a right triangle with sides 3 and 4
base = 3.0
height = 4.0

hypotenuse = np.hypot(base, height)
print(f"Hypotenuse of (3, 4): {hypotenuse}")

# arctan2(y, x) example (gives the angle in radians)
angle = np.arctan2(1.0, 1.0)
print(f"Angle of (1, 1): {np.rad2deg(angle)} degrees")`,
      visTitle: 'Visualization (np.hypot):',
      visualization: (
        <>
          <div className={boxStyle('fuchsia')}>
            <div className="visual-item p-2 rounded">3</div>
            <div className="visual-item p-2 rounded">4</div>
          </div>
          <span className={arrowStyle}>→</span>
          <div className={boxStyle('fuchsia')}>
            <div className={visualStyle('fuchsia', 'fuchsia')}>5.</div>
          </div>
        </>
      )
    }
  ];

  const statsAggregations = [
    {
      title: 'np.sum & np.prod',
      colorClass: 'text-green-400',
      operator: 'Compute the sum or product of all elements in an array.',
      description: 'Core aggregation functions. Can use the `axis` parameter to sum/product over specific dimensions of multi-dimensional arrays.',
      syntax: 'arr = np.array([1, 2, 3, 4])\ntotal = np.sum(arr)',
      code: `import numpy as np
arr_1d = np.array([1, 2, 3, 4])
arr_2d = np.array([[1, 2], [3, 4]])

# Sum of all elements in 1D array
total_sum = np.sum(arr_1d)
print(f"Total Sum: {total_sum}")

# Sum over axis=0 (columns)
col_sum = np.sum(arr_2d, axis=0)
print(f"Sum over columns: {col_sum}")

# Product of all elements
total_prod = np.prod(arr_1d)
print(f"Total Product: {total_prod}")`,
      visTitle: 'Visualization (np.sum):',
      visualization: (
        <>
          <div className={boxStyle('green')}>
            <div className="visual-item p-2 rounded">1</div>
            <div className="visual-item p-2 rounded">2</div>
            <div className="visual-item p-2 rounded">3</div>
            <div className="visual-item p-2 rounded">4</div>
          </div>
          <span className={arrowStyle}>→</span>
          <div className={boxStyle('green')}>
            <div className={visualStyle('green', 'green')}>10</div>
          </div>
        </>
      )
    },
    {
      title: 'np.cumsum & np.cumprod',
      colorClass: 'text-green-400',
      operator: 'Compute the cumulative sum or product.',
      description: 'Returns an array of the same shape where each element is the running sum or product up to that point.',
      syntax: 'arr = np.array([1, 2, 3, 4])\ncumulative = np.cumsum(arr)',
      code: `import numpy as np
arr = np.array([1, 2, 3, 4, 5])
print(f"Original: {arr}")

# Cumulative sum (Running total)
cumulative_sum = np.cumsum(arr)
print(f"Cumulative Sum: {cumulative_sum}")

# Cumulative product
cumulative_prod = np.cumprod(arr)
print(f"Cumulative Prod: {cumulative_prod}")`,
      visTitle: 'Visualization (np.cumsum):',
      visualization: (
        <>
          <div className={boxStyle('green')}>
            <div className="visual-item p-2 rounded">1</div>
            <div className="visual-item p-2 rounded">2</div>
            <div className="visual-item p-2 rounded">3</div>
            <div className="visual-item p-2 rounded">4</div>
          </div>
          <span className={arrowStyle}>→</span>
          <div className={boxStyle('green')}>
            <div className={visualStyle('green', 'green')}>1</div>
            <div className={visualStyle('green', 'green')}>3</div>
            <div className={visualStyle('green', 'green')}>6</div>
            <div className={visualStyle('green', 'green')}>10</div>
          </div>
        </>
      )
    },
    {
      title: 'np.mean / median / std',
      colorClass: 'text-green-400',
      operator: 'Calculate mean (average), median (middle value), and standard deviation.',
      description: 'Essential descriptive statistics. They also support the `axis` parameter for calculating stats across dimensions.',
      syntax: 'arr = np.array([1, 2, 3, 10])\navg = np.mean(arr)\nmed = np.median(arr)',
      code: `import numpy as np
data = np.array([10, 20, 30, 40])
print(f"Data: {data}")

# Mean (Average)
avg = np.mean(data)
print(f"Mean: {avg}")

# Median (Middle value)
med = np.median(data)
print(f"Median: {med}")

# Standard Deviation (spread)
std_dev = np.std(data)
print(f"Std Dev: {np.round(std_dev, 2)}")`,
      visTitle: 'Visualization (np.median):',
      visualization: (
        <>
          <div className={boxStyle('green')}>
            <div className="visual-item p-2 rounded">1</div>
            <div className="visual-item p-2 rounded">2</div>
            <div className="visual-item p-2 rounded">3</div>
            <div className="visual-item p-2 rounded">10</div>
          </div>
          <span className={arrowStyle}>→</span>
          <div className={boxStyle('green')}>
            <div className={visualStyle('green', 'green')}>2.5</div>
          </div>
        </>
      )
    },
    {
      title: 'np.argmin / argmax',
      colorClass: 'text-green-400',
      operator: 'Find the index (position) of the minimum or maximum value.',
      description: 'Instead of the value, these functions return the index where the min/max value occurs, crucial for indexing operations.',
      syntax: 'arr = np.array([5, 1, 9, 2])\nmax_idx = np.argmax(arr)',
      code: `import numpy as np
arr = np.array([5, 1, 9, 2])
print(f"Array: {arr}")

# Index of the maximum value (9 is at index 2)
max_idx = np.argmax(arr)
print(f"Argmax (index of 9): {max_idx}")

# Index of the minimum value (1 is at index 1)
min_idx = np.argmin(arr)
print(f"Argmin (index of 1): {min_idx}")`,
      visTitle: 'Visualization (np.argmax):',
      visualization: (
        <>
          <div className={boxStyle('green') + ' relative'}>
            <div className="visual-item p-2 rounded">5</div>
            <div className="visual-item p-2 rounded">1</div>
            <div className="visual-item p-2 rounded bg-green-900/50 border-green-700">9</div>
            <div className="visual-item p-2 rounded">2</div>
            <div className="absolute -bottom-4 text-xs text-gray-400 flex w-full justify-around pr-2">
              <span>0</span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
          </div>
          <span className={arrowStyle}>→</span>
          <div className={boxStyle('green')}>
            <div className={visualStyle('green', 'green')}>2</div>
          </div>
        </>
      )
    },
    {
      title: 'np.percentile / quantile',
      colorClass: 'text-green-400',
      operator: 'Find values at a specific percentile (0-100) or quantile (0-1).',
      description: 'Used for non-parametric statistics, dividing the data into bins. Quantile is the same as percentile but uses a 0 to 1 range.',
      syntax: 'arr = np.arange(1, 101)\n# Find the 75th percentile\np75 = np.percentile(arr, 75)',
      code: `import numpy as np
arr = np.arange(1, 101)

# Find the 50th percentile (the median)
p50 = np.percentile(arr, 50)
print(f"50th Percentile: {p50}")

# Find the 0.9 quantile (90% of data is below this value)
q90 = np.quantile(arr, 0.9)
print(f"0.9 Quantile: {q90}")`,
      visTitle: 'Visualization (75th Percentile):',
      visualization: (
        <>
          <div className={boxStyle('green')}>
            <div className="visual-item p-2 rounded">1..</div>
            <div className="visual-item p-2 rounded">..100</div>
          </div>
          <span className={arrowStyle}>→</span>
          <div className={boxStyle('green')}>
            <div className={visualStyle('green', 'green')}>75.0</div>
          </div>
        </>
      )
    },
    {
      title: 'np.linalg.norm',
      colorClass: 'text-green-400',
      operator: 'Compute the vector or matrix norm.',
      description: 'Calculates the magnitude of a vector (length) or the matrix norm, often the Euclidean norm (L2) by default.',
      syntax: 'v = np.array([3, 4])\nnorm_v = np.linalg.norm(v)\n# Result: 5.0 ( $\\sqrt{3^2 + 4^2}$ )',
      code: `import numpy as np
# Calculate the L2 Norm (Euclidean distance from origin)
v = np.array([3, 4, 12])
norm_v = np.linalg.norm(v)
print(f"Vector: {v}")
print(f"L2 Norm (Magnitude): {norm_v}")`,
      visTitle: 'Visualization (L2 Norm):',
      visualization: (
        <>
          <div className={boxStyle('green')}>
            <div className="visual-item p-2 rounded">3</div>
            <div className="visual-item p-2 rounded">4</div>
          </div>
          <span className={arrowStyle}>→</span>
          <div className={boxStyle('green')}>
            <div className={visualStyle('green', 'green')}>5.0</div>
          </div>
        </>
      )
    }
  ];

  const linearAlgebra = [
    {
      title: 'np.dot / matmul / @',
      colorClass: 'text-red-400',
      operator: 'Dot product and matrix multiplication. `@` is shorthand for `np.matmul`.',
      description: '`np.dot` can be used for dot product (vectors) and matrix multiplication (2D arrays), but `@` (`np.matmul`) is preferred for matrix products.',
      syntax: 'A = np.array([[1,2],[3,4]])\nB = np.eye(2)\nC = A @ B',
      code: `import numpy as np
# Define two 2x2 matrices
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# Matrix multiplication using the @ operator (preferred)
C_matmul = A @ B
print(f"A @ B result:\\n{C_matmul}")

# Dot product for vectors
v1 = np.array([1, 2])
v2 = np.array([3, 4])
dot_product = np.dot(v1, v2)
print(f"Dot product of [1,2] and [3,4]: {dot_product}")`,
      visTitle: 'Visualization (Matrix Matmul):',
      visualization: (
        <>
          <div className="text-sm text-center font-bold text-gray-400">2x2</div>
          <div className={boxStyle('red')}>..</div>
          <div className="text-2xl font-bold text-red-400">@</div>
          <div className="text-sm text-center font-bold text-gray-400">2x2</div>
          <div className={boxStyle('red')}>..</div>
          <span className={arrowStyle}>→</span>
          <div className="text-sm text-center font-bold text-gray-400">2x2</div>
          <div className={boxStyle('red')}>..</div>
        </>
      )
    },
    {
      title: 'np.linalg.inv & det',
      colorClass: 'text-red-400',
      operator: 'Calculate the inverse ($\mathbf{A}^{-1}$) and determinant ($\mathrm{det}(\mathbf{A})$) of a square matrix.',
      description: 'Fundamental operations in linear algebra. The inverse is used for solving systems of equations and the determinant indicates matrix invertibility.',
      syntax: 'A = np.array([[1,2],[3,4]])\ndeterminant = np.linalg.det(A)',
      code: `import numpy as np
A = np.array([[4, 7], [2, 6]])
print(f"Matrix A:\\n{A}")

# Calculate the determinant
det_A = np.linalg.det(A)
print(f"Determinant: {det_A}")

# Calculate the inverse
inv_A = np.linalg.inv(A)
print(f"Inverse Matrix A^-1:\\n{inv_A}")`,
      visTitle: 'Visualization ($\mathrm{det}(\mathbf{A})$):',
      visualization: (
        <>
          <div className={boxStyle('red')}>
            <div className="grid grid-cols-2 gap-1 text-xs sm:text-sm">
              <div className="visual-item p-2 text-center rounded">1</div>
              <div className="visual-item p-2 text-center rounded">2</div>
              <div className="visual-item p-2 text-center rounded">3</div>
              <div className="visual-item p-2 text-center rounded">4</div>
            </div>
          </div>
          <span className={arrowStyle}>→</span>
          <div className={boxStyle('red')}>
            <div className={visualStyle('red', 'red')}>-2.0</div>
          </div>
        </>
      )
    },
    {
      title: 'np.linalg.solve',
      colorClass: 'text-red-400',
      operator: 'Solve a system of linear equations, $\mathbf{A}\mathbf{x} = \mathbf{b}$, for $\mathbf{x}$.',
      description: 'The most efficient and stable way to solve linear systems like $2x + y = 1, x + y = 1$ without explicitly calculating the inverse.',
      syntax: '# 2x + y = 1; x + y = 1\nA = np.array([[2,1],[1,1]])\nb = np.array([1, 1])\nx = np.linalg.solve(A, b)',
      code: `import numpy as np
# System: x - 2y = 1, 3x + y = 17
A = np.array([[1, -2], [3, 1]])
b = np.array([1, 17])

# Solve for x (x and y)
solution = np.linalg.solve(A, b)
print(f"Solution [x, y]: {solution}")
# Verification: A @ x must equal b
verification = A @ solution
print(f"Verification A @ x: {verification}")`,
      visTitle: 'Visualization ($\mathbf{A}\mathbf{x} = \mathbf{b}$):',
      visualization: (
        <>
          <div className="text-red-400 font-bold">A</div>
          <div className={boxStyle('red')}>..</div>
          <div className="text-red-400 font-bold">x</div> ={" "}
          <div className="text-red-400 font-bold">b</div>
          <div className={boxStyle('red')}>..</div>
          <span className={arrowStyle}>→</span>
          <div className="text-red-400 font-bold">x</div>
          <div className={boxStyle('red')}>..</div>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 font-inter p-4 sm:p-8">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        .font-inter { font-family: 'Inter', sans-serif; }
        .font-code {
          font-family: 'Consolas', 'Monaco', monospace;
        }
        .visual-item {
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .visual-box {
          min-width: 40px;
        }
        .card {
          backdrop-filter: blur(2px);
          background-color: rgba(30, 41, 59, 0.7);
        }
      `}</style>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <section id="mathematical-operations" className="py-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 mb-4">
            Unleashing the Calculator: NumPy Mathematical Operations
          </h2>
          <p className="mt-3 text-xl text-gray-300 max-w-4xl mx-auto">
            From simple element-wise arithmetic to complex linear algebra, this is the core of NumPy's speed and power. Use the **Live Sandbox** blocks below to try out each function immediately!
          </p>
        </div>

        {/* Sub-section for Basic Arithmetic */}
        <h3 className="text-3xl font-extrabold text-sky-300 border-b border-sky-600/50 pb-3 mb-12">
          1. Basic Arithmetic: Operator vs. Universal Function (ufunc)
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {basicArithmetic.map((card, index) => (
            <MathCard key={index} {...card} />
          ))}
        </div>

        {/* Sub-section for Rounding */}
        <h3 className="text-3xl font-extrabold text-sky-300 border-b border-sky-600/50 pb-3 mt-24 mb-12">
          2. Rounding &amp; Approximation
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {roundingOps.map((card, index) => (
            <MathCard key={index} {...card} />
          ))}
        </div>

        {/* Sub-section for Logs & Exponents */}
        <h3 className="text-3xl font-extrabold text-sky-300 border-b border-sky-600/50 pb-3 mt-24 mb-12">
          3. Exponential &amp; Logarithmic
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {logExponents.map((card, index) => (
            <MathCard key={index} {...card} />
          ))}
        </div>

        {/* Sub-section for Trigonometry */}
        <h3 className="text-3xl font-extrabold text-sky-300 border-b border-sky-600/50 pb-3 mt-24 mb-12">
          4. Trigonometric &amp; Angle Functions
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {trigFunctions.map((card, index) => (
            <MathCard key={index} {...card} />
          ))}
        </div>

        {/* Sub-section for Stats */}
        <h3 className="text-3xl font-extrabold text-sky-300 border-b border-sky-600/50 pb-3 mt-24 mb-12">
          5. Aggregations &amp; Statistical Functions
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {statsAggregations.map((card, index) => (
            <MathCard key={index} {...card} />
          ))}
        </div>

        {/* Sub-section for Linear Algebra */}
        <h3 className="text-3xl font-extrabold text-sky-300 border-b border-sky-600/50 pb-3 mt-24 mb-12">
          6. Linear Algebra
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {linearAlgebra.map((card, index) => (
            <MathCard key={index} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default NumpyIntro;
