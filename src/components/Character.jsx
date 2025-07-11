/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useMotionValue, useSpring } from "motion/react";
import { useFrame } from "@react-three/fiber";

export function Character(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/SpacemanPose.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  const yPosition = useMotionValue(5);
  const ySpring = useSpring(yPosition, { damping: 30 });
  useEffect(() => {
    ySpring.set(-1);
  }, [ySpring]);
  useFrame(() => {
    group.current.position.y = ySpring.get();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[-Math.PI / 2, -0.2, 2.2]}
      scale={props.scale || 0.28}
      position={props.position || [1.3, -1, 0]}
    >
      <group name="body2_model0">
        <group name="Sketchfab_model">
          <group name="Root">
            <group name="metarig">
              <group name="Cube" />
              <group name="Cube001" />
              <skinnedMesh
                name="Cube001_0"
                geometry={nodes.Cube001_0.geometry}
                material={materials["AstronautFallingTexture.png.001"]}
                skeleton={nodes.Cube001_0.skeleton}
              />
              <skinnedMesh
                name="Cube001_0001"
                geometry={nodes.Cube001_0001.geometry}
                material={materials.Glass_Helmet}
                skeleton={nodes.Cube001_0001.skeleton}
              />
              <group name="Cube002" />
              <skinnedMesh
                name="Cube002_0"
                geometry={nodes.Cube002_0.geometry}
                material={materials["AstronautFallingTexture.png.001"]}
                skeleton={nodes.Cube002_0.skeleton}
              />
              <group name="Cube003" />
              <group name="Cube004" />
              <group name="Cube005" />
              <group name="Cube008" />
              <skinnedMesh
                name="Cube008_0"
                geometry={nodes.Cube008_0.geometry}
                material={materials["AstronautFallingTexture.png.001"]}
                skeleton={nodes.Cube008_0.skeleton}
              />
              <group
                name="Cube009"
                rotation={[-2.708, 0.013, -1.447]}
                scale={1.307}
              />
              <group name="Cube011" />
              <skinnedMesh
                name="Cube011_0"
                geometry={nodes.Cube011_0.geometry}
                material={materials["AstronautFallingTexture.png.001"]}
                skeleton={nodes.Cube011_0.skeleton}
              />
              <skinnedMesh
                name="Cube_0"
                geometry={nodes.Cube_0.geometry}
                material={materials["AstronautFallingTexture.png.001"]}
                skeleton={nodes.Cube_0.skeleton}
              />
              <group name="Plane" />
              <skinnedMesh
                name="Plane_0"
                geometry={nodes.Plane_0.geometry}
                material={materials["AstronautFallingTexture.png.001"]}
                skeleton={nodes.Plane_0.skeleton}
              />
              <primitive object={nodes.metarig_rootJoint} />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/SpacemanPose.glb");
