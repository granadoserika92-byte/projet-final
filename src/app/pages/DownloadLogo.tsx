import { Logo } from '../components/Logo';
import { Sparkles } from 'lucide-react';

export default function LogoDownloadPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '40px',
      background: 'linear-gradient(135deg, #0d9488 0%, #f59e0b 100%)'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '60px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        textAlign: 'center',
        maxWidth: '900px'
      }}>
        <h1 style={{ 
          fontSize: '42px', 
          fontWeight: 'bold', 
          marginBottom: '10px',
          color: '#0f766e'
        }}>
          ✅ Logo SVG Intégré !
        </h1>
        
        <p style={{
          fontSize: '18px',
          color: '#6b7280',
          marginBottom: '40px'
        }}>
          <strong>Les Clés du Cabanon</strong> - Ton logo est maintenant créé en SVG interne
        </p>
        
        {/* Logo Display */}
        <div style={{
          background: 'linear-gradient(135deg, #f0fdfa 0%, #ecfdf5 100%)',
          borderRadius: '16px',
          padding: '50px',
          marginBottom: '40px',
          border: '3px solid #14b8a6'
        }}>
          <Logo className="w-48 h-48 mx-auto mb-6" />
          <Logo variant="full" className="w-full h-32 mx-auto" />
        </div>

        {/* Avantages */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          <div style={{
            background: '#ecfdf5',
            padding: '24px',
            borderRadius: '12px',
            border: '2px solid #14b8a6'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>⚡</div>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0f766e', marginBottom: '8px' }}>
              Performance
            </h3>
            <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6' }}>
              Logo SVG = Chargement instantané, aucun fichier externe !
            </p>
          </div>

          <div style={{
            background: '#fef3c7',
            padding: '24px',
            borderRadius: '12px',
            border: '2px solid #f59e0b'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>🎨</div>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#78350f', marginBottom: '8px' }}>
              Qualité HD
            </h3>
            <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6' }}>
              Netteté parfaite sur tous les écrans (4K, Retina, mobile)
            </p>
          </div>

          <div style={{
            background: '#ede9fe',
            padding: '24px',
            borderRadius: '12px',
            border: '2px solid #8b5cf6'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>🚀</div>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#5b21b6', marginBottom: '8px' }}>
              Déjà intégré
            </h3>
            <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6' }}>
              Header + Footer + tous les composants utilisent le logo SVG
            </p>
          </div>
        </div>

        {/* Info technique */}
        <div style={{
          textAlign: 'left',
          background: '#f9fafb',
          padding: '30px',
          borderRadius: '12px',
          marginBottom: '30px',
          border: '2px dashed #d1d5db'
        }}>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: 'bold', 
            marginBottom: '16px',
            color: '#111827',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            💻 Détails techniques
          </h2>
          <ul style={{ 
            fontSize: '15px', 
            lineHeight: '1.8',
            color: '#4b5563',
            paddingLeft: '20px',
            margin: 0
          }}>
            <li style={{ marginBottom: '8px' }}>
              ✅ <strong>Fichier source :</strong> <code style={{
                background: '#e5e7eb',
                padding: '2px 6px',
                borderRadius: '4px',
                fontFamily: 'monospace',
                fontSize: '13px'
              }}>/src/app/components/Logo.tsx</code>
            </li>
            <li style={{ marginBottom: '8px' }}>
              ✅ <strong>Format :</strong> SVG React Component (pas d&apos;import externe)
            </li>
            <li style={{ marginBottom: '8px' }}>
              ✅ <strong>Couleurs :</strong> Teal (#0d9488) + Cyan (#06b6d4) + Jaune (#fbbf24)
            </li>
            <li style={{ marginBottom: '8px' }}>
              ✅ <strong>Éléments :</strong> Cabanon (maison) + Clé dorée + Soleil
            </li>
            <li>
              ✅ <strong>Variantes :</strong> <code style={{
                background: '#e5e7eb',
                padding: '2px 6px',
                borderRadius: '4px',
                fontFamily: 'monospace',
                fontSize: '13px'
              }}>icon</code> (icône seule) et <code style={{
                background: '#e5e7eb',
                padding: '2px 6px',
                borderRadius: '4px',
                fontFamily: 'monospace',
                fontSize: '13px'
              }}>full</code> (avec texte)
            </li>
          </ul>
        </div>

        {/* CTA final */}
        <div style={{
          background: 'linear-gradient(135deg, #0d9488 0%, #0891b2 100%)',
          padding: '30px',
          borderRadius: '16px',
          marginBottom: '30px'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>🎉</div>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '12px' }}>
            Prêt pour le déploiement !
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)', marginBottom: '20px' }}>
            Plus besoin de télécharger quoi que ce soit.<br />
            Ton logo SVG est déjà partout sur le site !
          </p>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255,255,255,0.2)',
            padding: '12px 20px',
            borderRadius: '8px',
            fontSize: '14px',
            color: 'white',
            fontFamily: 'monospace'
          }}>
            <Sparkles size={18} />
            git push origin main
          </div>
        </div>

        {/* Bouton retour */}
        <a 
          href="/"
          style={{
            display: 'inline-block',
            padding: '16px 40px',
            background: 'linear-gradient(135deg, #0d9488 0%, #0891b2 100%)',
            color: 'white',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '18px',
            boxShadow: '0 4px 16px rgba(13, 148, 136, 0.4)',
            transition: 'transform 0.2s',
            border: 'none'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          ← Retour à l&apos;accueil
        </a>
      </div>
    </div>
  );
}
