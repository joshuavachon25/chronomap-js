export default {
    id: 'operation-tesseract-ocr',
    name: 'OCR',
    icon: 'electric_bolt',
    description: 'OCR un fichier',
    overview: ({ text: string }) => [
        {
            label: 'Text',
            text: text,
        },
    ],
    options: [
        {
            field: 'text',
            name: 'Text',
            type: 'string',
            meta: {
                width: 'full',
                interface: 'input',
            },
        },
    ],
};