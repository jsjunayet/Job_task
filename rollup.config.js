// rollup.config.js
import { rollup } from 'rollup';

export default {
  input: 'src/main.js',
  output: {
    dir: 'dist',
    format: 'es',
    manualChunks: {
		lodash: ['lodash']
	}
  },
};
