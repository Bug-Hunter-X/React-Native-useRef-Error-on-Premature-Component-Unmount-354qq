# React Native useRef Error on Premature Component Unmount

This repository demonstrates a common error in React Native applications involving the `useRef` hook and premature component unmounting.  The error occurs when attempting to access `ref.current` after the component has already unmounted, leading to unexpected behavior or crashes. This example showcases the problem and provides a solution using a cleanup function within the `useEffect` hook.

## Problem
The `useRef` hook is commonly used to maintain mutable values across renders.  However, if the component unmounts before the ref is properly handled, accessing `ref.current` can cause issues. The provided `useRefUnmountBug.js` file illustrates this issue.

## Solution
The solution involves leveraging the cleanup function in the `useEffect` hook to set the ref to `null` before the component unmounts. This prevents attempts to access resources that no longer exist.  The `useRefUnmountSolution.js` file presents this corrected implementation.