"use client";
export default function NFTCard({ tokenId, selected, onSelect }) {
  return (
    <div className={`nft-card${selected ? ' selected' : ''}`} onClick={() => onSelect(tokenId)} style={{border:'1px solid #ccc',borderRadius:8,padding:16,margin:8,cursor:'pointer',background:selected?'#e0f7fa':'#fff'}}>
      <div>Token ID: {tokenId}</div>
      <div style={{height:80,background:'#eee',borderRadius:8,margin:'8px 0'}}>Image Placeholder</div>
      <input type="checkbox" checked={selected} readOnly />
    </div>
  );
}
