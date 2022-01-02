import React from 'react'
import { useState, useEffect } from 'react'
import styles from '../styles/layout.module.css'
import Unity, { UnityContext } from "react-unity-webgl";

const Gameboard = ({isGame}) => {
    const unityContext = new UnityContext({
      productName: "React Unity WebGL Tests",
      companyName: "Jeffrey Lanters",

      loaderUrl: "Build/tsj4.loader.js",
      dataUrl: "Build/tsj4.data",
      frameworkUrl: "Build/tsj4.framework.js",
      codeUrl: "Build/tsj4.wasm",

      webglContextAttributes: {
        preserveDrawingBuffer: true,
      },
    });
    return (
      <div>
        <Unity unityContext={unityContext} style={{width:'100%',height:'100%'}} />
      </div>
    )
    //<Image src="/bg.png" alt="" width={1920} height={1080}/>
}


export default Gameboard
