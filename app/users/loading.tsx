// import Image from 'next/image';

export default function Loading() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <img src="/loading.gif" alt="Loading" />
    </div>
  )
}