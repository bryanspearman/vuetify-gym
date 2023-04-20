<template>  
  <div
    :style="`
      background-image: url('${backgroundImg}'); 
      background-position: ${bgPosition}; 
      background-size: ${bgSize}; 
      background-repeat: no-repeat;
      height: ${height};
      margin: 0;
      padding: 0;
      position: relative;
    `"    
  >
    <div 
      :class="`text-center text-lg-left text-h5 text-sm-h4 text-lg-h3 text-xl-h2 pl-lg-14 font-weight-bold ${titleColor}--text text-uppercase`" 
      :style="$vuetify.breakpoint.mdAndUp ? 'position: absolute; bottom: 0; width:100%; margin-bottom: -9px;' : 'position: absolute; bottom: 0; width:100%; margin-bottom: -8px;'"     
    >
      {{ title }}
    </div>  
  </div> 
</template>

<script>
  // Spans full screen width, adjustable height, background image and title
  // 'backgroundImg' prop must be the path to the image in the 'static/images/' folder.  Example: "/images/myImage.jpg"

  export default {
    props: {
      backgroundImg: {
        type: String,
        required: false,
        default: ''
      },
      bgPosition: {
        type: String,
        required: false,
        default: "top"
      },
      bgSize: {
        type: String,
        required: false,
        default: "cover"
      },
      height: {
        type: String,
        default: "350px",
        required: false
      },
      title: {
        type: String,
        required: false,
        default: ''
      },
      titleColor: {
        type: String,
        required: false,
        default: "white"
      }
    }    
  };
</script>
