import React, { useState, useMemo } from 'react';
import { InfoBox } from '../components';

const PxToEmConverter: React.FC = () => {
    const [baseSize, setBaseSize] = useState<number>(16);
    const [pxValue, setPxValue] = useState<number>(16);

    const emValue = useMemo(() => {
        if (baseSize > 0 && pxValue >= 0) {
            return (pxValue / baseSize).toFixed(3);
        }
        return 'N/A';
    }, [baseSize, pxValue]);
    
    const remValue = useMemo(() => {
        // Rem is typically relative to the root font size, which we can simulate with our base size input
         if (baseSize > 0 && pxValue >= 0) {
            return (pxValue / baseSize).toFixed(3);
        }
        return 'N/A';
    }, [baseSize, pxValue]);


    return (
        <>
            <p className="text-lg leading-relaxed">Use this simple tool to convert pixel (px) units to relative units like em and rem. Relative units are essential for creating scalable and accessible web designs.</p>

            <div className="my-8 p-6 bg-gray-100 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-4">Converter</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                    <div>
                        <label htmlFor="baseSize" className="block text-sm font-medium mb-1">Base Font Size (px)</label>
                        <input
                            id="baseSize"
                            type="number"
                            value={baseSize}
                            onChange={(e) => setBaseSize(Number(e.target.value))}
                            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500"
                        />
                         <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">This is the parent's or root's font-size.</p>
                    </div>
                    <div>
                        <label htmlFor="pxValue" className="block text-sm font-medium mb-1">Pixel Value (px)</label>
                        <input
                            id="pxValue"
                            type="number"
                            value={pxValue}
                            onChange={(e) => setPxValue(Number(e.target.value))}
                            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500"
                        />
                         <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">The value you want to convert.</p>
                    </div>
                </div>

                <div className="mt-6 text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-inner">
                    <p className="text-lg">Result:</p>
                    <p className="text-4xl font-bold text-indigo-500 my-2">{emValue} em</p>
                    <p className="text-2xl font-bold text-emerald-500">{remValue} rem</p>
                </div>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-600" />

            <h2 className="text-3xl font-bold mt-10 mb-4">Understanding Relative Units</h2>
            
            <h3 className="text-2xl font-bold mt-8 mb-3">em</h3>
            <p className="text-lg leading-relaxed">The <code>em</code> unit is relative to the font-size of the <strong>direct parent</strong> element. For example, if a parent has `font-size: 16px;`, then `1em` for a child element is equal to `16px`, and `2em` is `32px`. This can be powerful, but can also lead to compounding issues if you have many nested elements with relative font sizes.</p>

            <h3 className="text-2xl font-bold mt-8 mb-3">rem (root em)</h3>
            <p className="text-lg leading-relaxed">The <code>rem</code> unit is relative to the font-size of the <strong>root element</strong> (the `&lt;html&gt;` tag). The default font-size in most browsers is `16px`. This avoids the compounding problem of `em` units, as the reference point is always the same. `rem` is widely recommended for sizing typography and spacing for better scalability and consistency.</p>

             <InfoBox className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 text-emerald-800 dark:text-emerald-300 mt-10">
                <h4 className="font-bold">Accessibility Benefits</h4>
                <p className="mt-2">Using `rem` and `em` allows users to change the default font size in their browser settings for readability. Your layout will scale gracefully along with their preference, which is not always the case when using fixed `px` units.</p>
            </InfoBox>
        </>
    );
};

export default PxToEmConverter;