import cssNano from 'cssnano';
import postcssPresetEnv from 'postcss-preset-env';
import postCssAutoPrefixer from 'autoprefixer';


export default{
  plugins :[
postcssPresetEnv({stage:1,}),
postCssAutoPrefixer({supports: true}),
cssNano({preset:"default",})

  ],
};