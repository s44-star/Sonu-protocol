import React, { useState, useEffect } from 'react';
import { TonConnectUIProvider, TonConnectButton, useTonWallet, useTonConnectUI } from '@tonconnect/ui-react';

export default function App() {
  const [rainParticles, setRainParticles] = useState([]);

  // Dynamically populate pure CSS rain layers
  useEffect(() => {
    const drops = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${0.8 + Math.random() * 0.7}s`
    }));
    setRainParticles(drops); // Fixed the typo here from 'drop' to 'drops'
  }, []);

  return (
    <TonConnectUIProvider manifestUrl="https://lexconv.com/tonconnect-manifest.json">
      <div className="relative w-screen h-screen bg-[#020202] text-green-400 p-4 flex items-center justify-center overflow-hidden">
        
        {/* Ambient Rainforest Jungle Gradient */}
        <div className="absolute inset-0 bg-radial-gradient from-emerald-950/20 via-transparent to-black pointer-events-none z-0" />
        
        {/* Waterfall Mist Node Overlay */}
        <div className="waterfall-mist left-1/2 -translate-x-1/2 z-0" />
        <div className="waterfall-mist left-1/4 -translate-x-1/2 animation-delay-2000 z-0" />

        {/* Real-time Dynamic Rain Matrix */}
        {rainParticles.map((drop) => (
          <div
            key={drop.id}
            className="rain-drop z-0"
            style={{
              left: drop.left,
              animationDelay: drop.delay,
              animationDuration: drop.duration
            }}
          />
        ))}

        {/* Flawless Glassmorphism & Cyberpunk-Bloomberg Terminal Shell */}
        <div className="relative w-full max-w-md border border-emerald-500/20 bg-black/75 backdrop-blur-xl shadow-[0_0_50px_rgba(34,197,94,0.1)] p-6 z-10 overflow-hidden">
          
          {/* Diagnostic CRT Scanline Grid */}
          <div className="absolute inset-0 terminal-grid pointer-events-none z-20" />
          
          <DropInterface />
        </div>
      </div>
    </TonConnectUIProvider>
  );
}

function DropInterface() {
  const wallet = useTonWallet();
  const [tonConnectUi] = useTonConnectUI();
  
  const [squadName, setSquadName] = useState('');
  const [socialLink, setSocialLink] = useState('');
  const [isMinted, setIsMinted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  // Pure Client-Side Core Web3 Logic targeting your wallet address directly
  const handleProtocolExecute = async (e) => {
    e.preventDefault();
    if (!wallet) return alert('SYS.ERR: INITIALIZE_WALLET_COMMUNICATION_FIRST');
    if (!squadName || !socialLink) return alert('SYS.ERR: BLANK_DATA_FIELDS_PROHIBITED');

    setLoading(true);
    try {
      await tonConnectUi.sendTransaction({
        validUntil: Math.floor(Date.now() / 1000) + 300,
        network: '-239', 
        messages: [
          {
            address: 'UQAUQlA6Ak4uLoftyor4x3GYydupgCTf_Gqyv9Pz_F9poZUI', 
            amount: '500000000' // Exactly 0.5 TON in nanotons
          }
        ]
      });
      
      setIsMinted(true);
    } catch (err) {
      console.error("TRANSACTION_FAILED", err);
      alert('SYS.LOG: INBOUND_TRANSACTION_REJECTED_BY_OPERATOR');
    } finally {
      setLoading(false);
    }
  };

  const handleLinkCopy = async () => {
    try {
      const deployUrl = `https://lexconv.com/drop?squad=${encodeURIComponent(squadName)}`;
      await navigator.clipboard.writeText(deployUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("CLIPBOARD_WRITE_EXCEPTION", err);
    }
  };

  return (
    <div className="relative z-30">
      {/* Top Banner Control Panel */}
      <div className="flex justify-between items-center border-b border-neutral-900 pb-4 mb-6">
        <div>
          <h1 className="text-xl font-extrabold tracking-widest text-white flex items-center gap-1">
            DROP<span className="text-purple-500 animate-pulse">.PROTOCOL</span>
          </h1>
          <p className="text-[10px] text-emerald-600/70 tracking-tighter uppercase font-bold">Rainforest Node // Alpha/S+</p>
        </div>
        <div className="scale-90 origin-right">
          <TonConnectButton />
        </div>
      </div>

      {/* Social Proof Live Log Ticker Feed */}
      <div className="bg-black/90 border border-neutral-900 text-[9px] p-2 mb-4 text-neutral-400 overflow-hidden tracking-tight whitespace-nowrap">
        <span className="text-purple-400 font-bold">[MINT.LOG]</span> &gt; CLAN 'HYDRA_OPS' OVERRODE ACCESS NODE #719... SECURING DOMINANCE INDEX STATUS...
      </div>

      {/* Scarcity Protocol Interface Metric */}
      <div className="grid grid-cols-2 gap-2 mb-6 text-xs border border-neutral-900 bg-neutral-950/60 p-2 backdrop-blur-md">
        <div>
          <span className="text-neutral-500 block text-[9px] font-bold">NODE_01 // SYSTEM_ALLOCATION</span>
          <span className="text-white font-black text-sm">91% DEPLOYED</span>
          <div className="w-full bg-neutral-900 h-1 mt-1">
            <div className="bg-purple-500 h-1 w-[91%] shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
          </div>
        </div>
        <div className="text-right flex flex-col justify-center">
          <span className="text-red-500 font-bold animate-pulse text-[9px]">CRITICAL // ONLY 9 PREMIUM PASSES LEFT</span>
        </div>
      </div>

      {!isMinted ? (
        <form onSubmit={handleProtocolExecute} className="space-y-4">
          
          {/* Premium Selector Frame */}
          <div className="border border-purple-500 bg-purple-950/20 p-3 relative shadow-[0_0_15px_rgba(168,85,247,0.1)]">
            <div className="absolute top-0 right-0 bg-purple-500 text-black font-black text-[9px] px-1.5 tracking-widest">ENFORCED</div>
            <div className="text-purple-400 font-black text-xs tracking-wider">ALPHA PASS // DOMINANCE PROTOCOL</div>
            <div className="text-[10px] text-neutral-400 mt-1">0.5 TON Fee / 3-Months Free Subdomains Included</div>
          </div>

          <div>
            <label className="block text-[10px] text-neutral-400 mb-1 font-bold">&gt; SQUAD_IDENTIFICATION_TAG</label>
            <input 
              type="text" 
              required
              placeholder="e.g. VENOM_RAID" 
              value={squadName}
              onChange={(e) => setSquadName(e.target.value.toUpperCase())}
              className="w-full bg-black/80 border border-emerald-500/30 focus:border-emerald-400 text-emerald-400 focus:outline-none p-2 text-sm tracking-widest placeholder:text-emerald-950"
            />
          </div>

          <div>
            <label className="block text-[10px] text-neutral-400 mb-1 font-bold">&gt; EMERGENCY_COMMUNICATION_UPLINK</label>
            <input 
              type="text" 
              required
              placeholder="t.me/your_squad" 
              value={socialLink}
              onChange={(e) => setSocialLink(e.target.value)}
              className="w-full bg-black/80 border border-neutral-900 focus:border-purple-500 text-purple-400 focus:outline-none p-2 text-sm placeholder:text-purple-950"
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className={`w-full py-4 font-black border tracking-widest text-xs transition-all duration-300 relative group overflow-hidden ${
              wallet 
                ? 'border-purple-500 bg-purple-950/30 text-purple-400 hover:bg-purple-500 hover:text-black shadow-[0_0_20px_rgba(168,85,247,0.2)]' 
                : 'border-neutral-900 bg-neutral-950 text-neutral-600 cursor-not-allowed'
            }`}
          >
            {loading ? 'PROCESSING SECURE MINT LAYER...' : wallet ? 'EXECUTE OVERRIDE // 0.5 TON' : 'SYSTEM OFFLINE: LINK WALLET'}
          </button>
          
          <div className="flex justify-between text-[9px] text-neutral-600 border-t border-neutral-900 pt-3">
            <span>UPLINK: {wallet ? 'ESTABLISHED' : 'STANDBY'}</span>
            <span>INDEX: MAINNET_NODE_-239</span>
          </div>
        </form>
      ) : (
        /* The Flawless Fluid Success State Frame */
        <div className="space-y-4">
          <div className="border-2 border-emerald-500 bg-emerald-950/20 p-4 text-center shadow-[0_0_20px_rgba(34,197,94,0.15)]">
            <div className="text-emerald-400 font-extrabold text-base tracking-widest">ACCESS COMPLIED</div>
            <p className="text-[10px] text-neutral-400 mt-1">SQUAD SIGNATURE WRITTEN IN TON LEDGER</p>
          </div>

          {/* Rendered Digital Dynamic Pass */}
          <div className="border border-neutral-800 bg-neutral-950/90 p-4 relative tracking-widest bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.1),transparent)]">
            <div className="absolute top-2 right-2 text-[8px] text-purple-400 font-bold border border-purple-500/40 px-1">PROTOCOL_VERIFIED</div>
            <div className="text-[9px] text-neutral-500 font-bold">SQUAD_TAG //</div>
            <div className="text-xl font-black text-white mb-2 tracking-widest">{squadName}</div>
            <div className="text-[9px] text-neutral-500 font-bold">TARGET_UPLINK //</div>
            <div className="text-xs text-emerald-400 break-all font-mono">{socialLink}</div>
          </div>

          <button 
            onClick={handleLinkCopy}
            className="w-full py-3 bg-emerald-500 text-black font-black text-xs tracking-widest hover:bg-emerald-400 transition-colors shadow-[0_0_15px_rgba(34,197,94,0.3)]"
          >
            {copied ? '✔ SHARE LINK COPIED TO SYSTEM' : 'EXTRACT SHARE PROTOCOL LINK'}
          </button>
        </div>
      )}

      {/* Structural Footnote */}
      <div className="text-[8px] text-neutral-700 mt-6 pt-4 border-t border-neutral-900 text-center tracking-wider font-bold">
        RUNNING SELF-SUSTAINING LOGISTICS // ABSOLUTE PRIVACY SECURED <br/>
        <span className="text-emerald-900">SYS.CODE_200_EXECUTION_STABLE</span>
      </div>
    </div>
  );
}
