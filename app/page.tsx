import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Learn More',
    },
    
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/degen.jpg`,
    aspectRatio: '1.91:1',
  },
  
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});


export const metadata: Metadata = {
  title: 'Create Layer Frame',
  description: 'A newer, simpler infrastructure for a newer phase of the internet.',
  openGraph: {
    title: 'Create Layer',
    description: 'A newer, simpler infrastructure for a newer phase of the internet.',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Create Layer Frame</h1>
    </>
  );
}
