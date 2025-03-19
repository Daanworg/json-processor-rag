# JSON Processor for RAG Datasets

A web application for processing and preparing JSON data for Retrieval-Augmented Generation (RAG) systems.

## Features

- JSON validation and repair using AI-powered correction
- Support for multiple file formats (JSON, CSV, XLSX, PDF, DOCX)
- Intelligent schema detection and field extraction
- Dataset merging with AI assistance
- RAG-optimized data export formats
- Local browser storage for processed entries
- Support for large file processing with queue system

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/daanworg/json-processor-rag.git
cd json-processor-rag
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with your Google API key:
```
REACT_APP_GOOGLE_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm start
```

## Building and Deployment

To create a production build:
```bash
npm run build
```

To deploy to GitHub Pages:
```bash
npm run deploy
```

## Usage

1. **Input Data**
   - Paste JSON directly into the text area
   - Upload files through the file picker
   - Supports JSON, CSV, XLSX, PDF, and DOCX formats

2. **Process and Fix**
   - Automatic JSON repair using AI
   - Schema detection and field extraction
   - Progress tracking for multiple files

3. **Merge and Export**
   - Select multiple entries to merge
   - AI-powered intelligent merging
   - Export in various formats (JSON, JSONL, CSV)
   - RAG-optimized export format

4. **RAG Preparation**
   - Structure data for RAG systems
   - Separate content and metadata
   - Export in RAG-ready format

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - see LICENSE file for details

## Authors

- [Your Name]

## Acknowledgments

- Built with React
- Uses Google's Gemini API for AI-powered features
- Includes libraries: Papa Parse, XLSX, Mammoth, PDF.js
