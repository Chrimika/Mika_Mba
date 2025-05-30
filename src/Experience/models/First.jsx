/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 First.glb 
*/

import React, { useMemo } from "react";
import { useGLTFWithKTX2 } from "../utils/useGLTFWithKTX2";
import { convertMaterialsToBasic } from "../utils/convertToBasic";

export default function Model(props) {
  const { nodes, materials } = useGLTFWithKTX2("/models/First.glb");
  const newMaterials = useMemo(
    () => convertMaterialsToBasic(materials),
    [materials]
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.First_Roof_Baked.geometry}
        material={newMaterials.First_Two_Baked}
        position={[5.714, 9.731, -22.866]}
      />
    </group>
  );
}
