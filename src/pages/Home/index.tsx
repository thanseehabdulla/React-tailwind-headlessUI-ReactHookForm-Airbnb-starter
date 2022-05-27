import React, { Fragment } from 'react';
import HookFormExample from '../../components/HookFormExample';
import HeadLessUIListBoxExample from '../../components/HeadLessUIListBoxExample';
import ReactSampleText from '../../components/ReactSampleText';
import TailwindExample from '../../components/TailwindExample';

export default function Home() {
  return (
    <>
      <TailwindExample />
      <HeadLessUIListBoxExample />
      <HookFormExample />
      <ReactSampleText />
    </>
  );
}
