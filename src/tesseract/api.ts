import { defineOperationApi } from '@directus/extensions-sdk';

export default defineOperationApi({
    id: 'operation-tesseract-ocr',
    handler: ({ text }) => {
        return {
            text: text
        }
    },
});