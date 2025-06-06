/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 Fourth.glb 
*/

import React, { useMemo } from "react";
import { useGLTFWithKTX2 } from "../utils/useGLTFWithKTX2";
import { convertMaterialsToBasic } from "../utils/convertToBasic";

export default function Model(props) {
  const { nodes, materials } = useGLTFWithKTX2("/models/Fourth.glb");
  const newMaterials = useMemo(
    () => convertMaterialsToBasic(materials),
    [materials]
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Fourth_Left_Mountain_Baked.geometry}
        material={newMaterials.Fourth_Baked}
        position={[31.093, 40.967, -91.882]}
      />
    </group>
  );
}
