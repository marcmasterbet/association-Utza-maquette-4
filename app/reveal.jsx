"use client";
import {useEffect} from 'react';
export default function Reveal(){useEffect(()=>{const nodes=document.querySelectorAll('.reveal');if(!('IntersectionObserver' in window)){nodes.forEach(n=>n.classList.add('visible'));return;}const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});nodes.forEach(n=>observer.observe(n));return()=>observer.disconnect()},[]);return null}
