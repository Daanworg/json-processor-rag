import React, { useState } from 'react';

const RagExportOptions = ({ onExport, dataset }) => {
  const [chunkingOptions, setChunkingOptions] = useState({
    maxLength: 512,
    overlap: 50,
    preserveSentences: true,
    preserveParagraphs: true
  });

  const [framework, setFramework] = useState('langchain');

  const frameworks = {
    langchain: {
      name: 'LangChain',
      template: 'langchain_docs'
    },
    llamaindex: {
      name: 'LlamaIndex',
      template: 'llamaindex_docs'
    },
    custom: {
      name: 'Custom Format',
      template: 'raw_json'
    }
  };

  const handleExport = () => {
    onExport(dataset, {
      format: 'rag',
      chunking: chunkingOptions,
      framework: frameworks[framework]
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Chunking Options</label>
        <div className="mt-2 space-y-3">
          <div>
            <label className="block text-xs text-gray-500">Maximum Length</label>
            <input
              type="number"
              value={chunkingOptions.maxLength}
              onChange={e => setChunkingOptions(prev => ({
                ...prev,
                maxLength: parseInt(e.target.value)
              }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          
          <div>
            <label className="block text-xs text-gray-500">Overlap</label>
            <input
              type="number"
              value={chunkingOptions.overlap}
              onChange={e => setChunkingOptions(prev => ({
                ...prev,
                overlap: parseInt(e.target.value)
              }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={chunkingOptions.preserveSentences}
                onChange={e => setChunkingOptions(prev => ({
                  ...prev,
                  preserveSentences: e.target.checked
                }))}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">Preserve Sentences</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={chunkingOptions.preserveParagraphs}
                onChange={e => setChunkingOptions(prev => ({
                  ...prev,
                  preserveParagraphs: e.target.checked
                }))}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">Preserve Paragraphs</span>
            </label>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Framework</label>
        <select
          value={framework}
          onChange={e => setFramework(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        >
          {Object.entries(frameworks).map(([key, { name }]) => (
            <option key={key} value={key}>{name}</option>
          ))}
        </select>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleExport}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Export RAG Dataset
        </button>
      </div>
    </div>
  );
};

export default RagExportOptions;
