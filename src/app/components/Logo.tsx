// Composant Logo SVG - Les Clés du Cabanon
// Logo original intégré avec les couleurs teal/turquoise + jaune

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
}

export function Logo({ className = "w-12 h-12", variant = 'icon' }: LogoProps) {
  if (variant === 'icon') {
    // Logo icône uniquement
    return (
      <svg 
        version="1.1" 
        viewBox="0 0 1024 1024" 
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Les Clés du Cabanon"
      >
        <path transform="translate(0)" d="m0 0h1024v1024h-1024z" fill="#FCFCFC"/>
        <path transform="translate(825,593)" d="m0 0h1l-1 13-6 24-6 18-10 23-10 19-11 18-14 19-9 11-12 13-21 21-11 9-14 11-21 14-21 12-24 11-28 10-27 7-24 4-17 2h-51l-35-5-32-8-28-10-24-11-20-11-18-12-19-14-15-13-23-23-9-11-12-16-10-15-3-5v-2l18-5 18-3 12-1h16l22 2 24 5 23 7 23 10 20 10 24 14 18 10 19 8 21 6 25 5 8 1h45l27-4 19-5 20-8 16-8 14-9 13-11 8-7 10-10 9-11 11-15 8-12 9-12 11-13 14-14 13-10 20-12 16-7z" fill="#0d9488"/>
        <path transform="translate(504,359)" d="m0 0 11 1 10 5 6 9 1 3v7l-3 8-4 6 4 5 10 19 10 26 7 24 6 25 6 32 4 29 2 24 1 38-2 40-4 33-2 11-8 3-39 12-46 10-12 2h-9v2l35-3 24-4 30-7 26-8 34-13 36-16 31-14 27-10 23-6 12-2-2 5-17 25-10 13-14 15-13 12-14 10-14 8-15 7-21 7-20 4-16 2h-42l-20-3-28-7-19-7-14-7v-2l-5-1-21-12-11-6-1-103-10-9-12-11-10-9-12-11-8-7-12-11-10-9h-4l-16 15-8 7-13 12-10 9-13 12-10 9-4 2v73l-10 3h-5v-64l-6 6-4-2-9-9 2-4 15-14 8-7 10-9 1-44h24v21l8-8 8-7 12-11 20-18 5 2 8 8 8 7 13 12 8 7 13 12 12 11 8 7 12 11 8 7 12 11 5 5-12 12-4-2-3-2v78l29 6 21 3 13 1h11l8-18 7-22 6-26 5-35 2-28v-49l-2-26-5-37-7-32-8-27-1-3-1 29-1 8-4-5-4-6 4 33v12l-4-5-10-14 3 22 2 27-4-4-9-14 4 46h-2l-9-15-2-2 2 34v16l-3-4-7-19-5-23-1-7v-38l4-20 6-18 9-17 10-13 8-7-8-7-4-8v-12l4-8 8-7z" fill="#14b8a6"/>
        <path transform="translate(662,128)" d="m0 0h20v2l-14 7-18 12-20 14-3 2 12-2h19l10 2-3 2-21 7-18 8-21 11 15-3h21l11 3-3 2-15 4-18 7-17 9-11 7 17-4 17-1 10 1 2 2-21 8-16 8-16 9-6 4 16-4 5-1h7l-4 3-16 11-11 10-8 7-10 10-7 8-8 10-10 15-11 23-4 12-16 1-10-19-13-17-12-13-11-10-16-12-3-3 12 2 7 2-15-10-13-8-16-9-6-3v-1h18l10 2-15-8-21-9-23-8 3-2 4-1h25l11 2-23-10-24-8-19-4 1-2 12-3h33l-32-14-25-8-4-2 6-2 8-1h11l15 2-21-13-18-10-20-10v-1l6-1h24l17 3 16 5 15 6 16 9 11 8 14 12 9 11 9 12 10 18-3-10-7-16-9-17-2-3 5 2 6 4 10 9 8 10 9 15 8 16 7 19 6 23 5 29 2 20 1 1 3-24 5-25 6-20 8-20 9-17 11-17 11-14 12-13 10-10 14-11 10-7 16-9 16-7 18-5z" fill="#14b8a6"/>
        <path transform="translate(504,359)" d="m0 0 11 1 10 5 6 9 1 3v7l-3 8-4 6 4 5 10 19 10 26 7 24 6 25 6 32 4 29 2 24 1 38-2 40-4 33-2 11-8 3-39 12-18 4h-6l6-10h-15v-1l16-1 8-18 7-22 6-26 5-35 2-28v-49l-2-26-5-37-7-32-8-27-1-3-1 29-1 8-4-5-4-6 4 33v12l-4-5-10-14 3 22 2 27-4-4-9-14 4 46h-2l-9-15-2-2 2 34v16l-3-4-7-19-5-23-1-7v-38l4-20 6-18 9-17 10-13 8-7-8-7-4-8v-12l4-8 8-7z" fill="#0d9488"/>
        <path transform="translate(652,513)" d="m0 0 14 1 16 5 10 5 10 8 2 4 4 2 8 12 5 14 2 9v19l-4 16-8 15-4 6h-2l-2 4-8 7-14 8-13 4-4 1h-24l-16-5-11-6-10-9-5-5-7-10-6-16-2-10v-16l3-15 4-10 5-8 9-10 9-8 14-7 15-4z" fill="#fbbf24"/>
        <path transform="translate(601,338)" d="m0 0h34l24 3 24 6 19 7 23 12 12 9 14 12 10 11 11 15 9 16 8 19 6 22 2 16-5-5-9-10-7-8-7-7-7-8-18-18 6 30v8l-4-5-8-14-14-21-10-13 5 25v9h-2l-10-16-8-11-15-21 5 20 1 7v11l-4-4-9-13-10-13-8-10-4-4 6 18 1 7v8l-5-5-8-10-9-10-14-16 5 18 1 5v12l-4-4-11-14-16-17-6-6 6 15 2 7v7l-4-4-7-8-12-11-10-7 1 4 3 15h-2l-5-5-10-8-16-9-5-3-5-10-4-5 17-8 18-6 22-5z" fill="#14b8a6"/>
        <path transform="translate(406,352)" d="m0 0h31l19 3 15 4 10 4v4l-3 7-2 11-12 11-9 13-2 3-1-3 2-19-8 9-7 10-7 11-5 8h-1v-16l3-16-10 15-15 25-4 7-2-4v-18l2-13-9 16-12 23-4 8h-2l-1-7v-19l1-10-12 23-8 14-7 15h-1l-1-6v-16l2-19-10 18-17 36-2 3-1-3v-20l2-16-14 27-12 26-2-1v-16l3-20-1 1-10 13-13 18-12 18-5 10h-1v-23l3-19 6-21 9-20 10-16 11-13 11-12 14-12 14-10 18-10 20-8 19-5z" fill="#14b8a6"/>
        <path transform="translate(825,593)" d="m0 0h1l-1 13-6 24-6 18-10 23-10 19-9 15-3 1-6 8-10 10-11 9-15 11-15 9-17 8-24 8-25 5-18 2-18 1h-14l-30-2-28-4-15-3-1-2 42-1 27-4 19-5 20-8 16-8 14-9 13-11 8-7 10-10 9-11 11-15 8-12 9-12 11-13 14-14 13-10 20-12 16-7z" fill="#14b8a6"/>
        <path transform="translate(674,236)" d="m0 0h19l17 2 21 5 20 8 17 10 13 10 12 12 8 10h-3l-21-8-42-13 9 7 10 9 9 11-2 1-23-12-29-13h-2l15 13 10 11 4 7-6-2-19-9-19-8-17-5 11 7 13 12 7 10-2 1-23-10-18-6-19-4 13 7 9 7 7 6 2 5-27-8-20-4-16-2 12 5 12 7 5 4-1 2-23-3h-34l17 5 6 3v1l-22 2-19 5-19 8-14 8-9 6-5-1-2-2 8-17 11-18 11-14 21-21 14-11 18-12 14-8 20-8 18-5z" fill="#14b8a6"/>
        <path transform="translate(318,256)" d="m0 0h27l25 4 24 8 21 10 19 12 17 13 15 14 9 9 13 17 7 11v2l-7 4-5-2-19-8-22-6-16-2h-14v-2l15-6 4-1h-22l-23 3-10 2v-2l10-8 16-9 2-1-23 4-29 8-11 3 6-8 11-9 15-8-24 6-21 8-16 7-2 1 2-5 11-13 10-8 10-6-23 8-28 13-9 4-2-1 6-8 11-12 15-12-24 10-21 10-12 7v-3l6-8 12-12 5-4-29 9-30 12 2-5 14-15 15-12 18-10 15-6 19-5z" fill="#14b8a6"/>
        <path transform="translate(336,515)" d="m0 0 5 2 8 8 8 7 13 12 8 7 13 12 12 11 8 7 12 11 8 7 12 11 5 5-12 12-4-2-3-2v78l7 2-4 1-4-1v12l2 5-6-2-9-5-1-103-10-9-12-11-10-9-12-11-8-7-12-11-10-9h-4l-16 15-8 7-13 12-10 9-13 12-10 9-4 2v73l-10 3h-5v-64l-6 6-4-2-9-9 2-4 15-14 8-7 10-9 1-44h24v21l8-8 8-7 12-11 10-9z" fill="#0d9488"/>
        <path transform="translate(496,404)" d="m0 0 11 3v30l-1 8-4-5-4-6 4 33v12l-4-5-10-14 3 22 2 27-4-4-9-14 4 46h-2l-9-15-2-2 2 34v16l-3-4-7-19-5-23-1-7v-38l4-20 6-18 9-17 10-13 6-6z" fill="#14b8a6"/>
        <path transform="translate(314,626)" d="m0 0h47v62l-9-1-17-4-21-3z" fill="#fbbf24"/>
        <path transform="translate(428,703)" d="m0 0h10l26 5 15 2 13 1v1l10 1-2 5-3 4 1 2-36 7h-9l-1 3v-2l-5-1-17-10-3-7z" fill="#14b8a6"/>
        <path transform="translate(759,498)" d="m0 0 1 3-6 11h-2l-1 4-14 15-10 7-3 1h-10l-1-1v-10l5-8 9-8 10-6 18-7z" fill="#fbbf24"/>
        <path transform="translate(602,458)" d="m0 0 5 3 11 14 6 10 4 11v8l-3 8-1 1h-7l-5-4-4-6-4-12-3-19v-13z" fill="#fbbf24"/>
        <path transform="translate(752,551)" d="m0 0h27l6 1-1 3-9 6-10 6-13 5-8 2h-8l-7-3-2-2 1-7 7-6 10-4z" fill="#fbbf24"/>
        <path transform="translate(658,448)" d="m0 0 3 4 4 16 2 12v13l-3 9-5 5h-6l-4-4-2-7v-16l3-14 7-17z" fill="#fbbf24"/>
        <path transform="translate(713,464)" d="m0 0 2 3-1 13-5 18-6 11-8 6-6 1-3-4v-12l4-10 7-11 9-10 5-4z" fill="#fbbf24"/>
        <path transform="translate(738,594)" d="m0 0 14 1 17 6 9 4-1 3-9 6-16 1-12-2-10-5-3-4 1-6 5-3z" fill="#fbbf24"/>
        <path transform="translate(613,651)" d="m0 0h7l2 3v8l-4 12-7 11-5 4-9 4h-3l2-16 6-15 9-10z" fill="#fbbf24"/>
        <path transform="translate(569,500)" d="m0 0 9 3 10 7 5 5 4 7 1 6-2 6-2 1h-7l-6-3-7-6-4-15z" fill="#fbbf24"/>
        <path transform="translate(715,628)" d="m0 0h8l12 6 6 7-15 3h-6l-6-7-1-8z" fill="#fbbf24"/>
        <path transform="translate(580,630)" d="m0 0h10l2 2v8l-6 9-5 5h-3v-10l1-13z" fill="#fbbf24"/>
        <path transform="translate(650,660)" d="m0 0 5 1 2 5-5 3-10 4 1-5 5-7z" fill="#fbbf24"/>
        <path transform="translate(525,552)" d="m0 0h2v6l-6-1-1-3z" fill="#fbbf24"/>
      </svg>
    );
  }

  // Logo complet avec texte
  return (
    <svg 
      viewBox="0 0 700 300" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Les Clés du Cabanon"
    >
      {/* Logo icône à gauche - version réduite */}
      <g transform="scale(0.25) translate(50, 50)">
        <path transform="translate(0)" d="m0 0h1024v1024h-1024z" fill="#FCFCFC"/>
        <path transform="translate(825,593)" d="m0 0h1l-1 13-6 24-6 18-10 23-10 19-11 18-14 19-9 11-12 13-21 21-11 9-14 11-21 14-21 12-24 11-28 10-27 7-24 4-17 2h-51l-35-5-32-8-28-10-24-11-20-11-18-12-19-14-15-13-23-23-9-11-12-16-10-15-3-5v-2l18-5 18-3 12-1h16l22 2 24 5 23 7 23 10 20 10 24 14 18 10 19 8 21 6 25 5 8 1h45l27-4 19-5 20-8 16-8 14-9 13-11 8-7 10-10 9-11 11-15 8-12 9-12 11-13 14-14 13-10 20-12 16-7z" fill="#0d9488"/>
        <path transform="translate(504,359)" d="m0 0 11 1 10 5 6 9 1 3v7l-3 8-4 6 4 5 10 19 10 26 7 24 6 25 6 32 4 29 2 24 1 38-2 40-4 33-2 11-8 3-39 12-46 10-12 2h-9v2l35-3 24-4 30-7 26-8 34-13 36-16 31-14 27-10 23-6 12-2-2 5-17 25-10 13-14 15-13 12-14 10-14 8-15 7-21 7-20 4-16 2h-42l-20-3-28-7-19-7-14-7v-2l-5-1-21-12-11-6-1-103-10-9-12-11-10-9-12-11-8-7-12-11-10-9h-4l-16 15-8 7-13 12-10 9-13 12-10 9-4 2v73l-10 3h-5v-64l-6 6-4-2-9-9 2-4 15-14 8-7 10-9 1-44h24v21l8-8 8-7 12-11 20-18 5 2 8 8 8 7 13 12 8 7 13 12 12 11 8 7 12 11 8 7 12 11 5 5-12 12-4-2-3-2v78l29 6 21 3 13 1h11l8-18 7-22 6-26 5-35 2-28v-49l-2-26-5-37-7-32-8-27-1-3-1 29-1 8-4-5-4-6 4 33v12l-4-5-10-14 3 22 2 27-4-4-9-14 4 46h-2l-9-15-2-2 2 34v16l-3-4-7-19-5-23-1-7v-38l4-20 6-18 9-17 10-13 8-7-8-7-4-8v-12l4-8 8-7z" fill="#14b8a6"/>
        <path transform="translate(662,128)" d="m0 0h20v2l-14 7-18 12-20 14-3 2 12-2h19l10 2-3 2-21 7-18 8-21 11 15-3h21l11 3-3 2-15 4-18 7-17 9-11 7 17-4 17-1 10 1 2 2-21 8-16 8-16 9-6 4 16-4 5-1h7l-4 3-16 11-11 10-8 7-10 10-7 8-8 10-10 15-11 23-4 12-16 1-10-19-13-17-12-13-11-10-16-12-3-3 12 2 7 2-15-10-13-8-16-9-6-3v-1h18l10 2-15-8-21-9-23-8 3-2 4-1h25l11 2-23-10-24-8-19-4 1-2 12-3h33l-32-14-25-8-4-2 6-2 8-1h11l15 2-21-13-18-10-20-10v-1l6-1h24l17 3 16 5 15 6 16 9 11 8 14 12 9 11 9 12 10 18-3-10-7-16-9-17-2-3 5 2 6 4 10 9 8 10 9 15 8 16 7 19 6 23 5 29 2 20 1 1 3-24 5-25 6-20 8-20 9-17 11-17 11-14 12-13 10-10 14-11 10-7 16-9 16-7 18-5z" fill="#14b8a6"/>
        <path transform="translate(652,513)" d="m0 0 14 1 16 5 10 5 10 8 2 4 4 2 8 12 5 14 2 9v19l-4 16-8 15-4 6h-2l-2 4-8 7-14 8-13 4-4 1h-24l-16-5-11-6-10-9-5-5-7-10-6-16-2-10v-16l3-15 4-10 5-8 9-10 9-8 14-7 15-4z" fill="#fbbf24"/>
        <path transform="translate(601,338)" d="m0 0h34l24 3 24 6 19 7 23 12 12 9 14 12 10 11 11 15 9 16 8 19 6 22 2 16-5-5-9-10-7-8-7-7-7-8-18-18 6 30v8l-4-5-8-14-14-21-10-13 5 25v9h-2l-10-16-8-11-15-21 5 20 1 7v11l-4-4-9-13-10-13-8-10-4-4 6 18 1 7v8l-5-5-8-10-9-10-14-16 5 18 1 5v12l-4-4-11-14-16-17-6-6 6 15 2 7v7l-4-4-7-8-12-11-10-7 1 4 3 15h-2l-5-5-10-8-16-9-5-3-5-10-4-5 17-8 18-6 22-5z" fill="#14b8a6"/>
        <path transform="translate(406,352)" d="m0 0h31l19 3 15 4 10 4v4l-3 7-2 11-12 11-9 13-2 3-1-3 2-19-8 9-7 10-7 11-5 8h-1v-16l3-16-10 15-15 25-4 7-2-4v-18l2-13-9 16-12 23-4 8h-2l-1-7v-19l1-10-12 23-8 14-7 15h-1l-1-6v-16l2-19-10 18-17 36-2 3-1-3v-20l2-16-14 27-12 26-2-1v-16l3-20-1 1-10 13-13 18-12 18-5 10h-1v-23l3-19 6-21 9-20 10-16 11-13 11-12 14-12 14-10 18-10 20-8 19-5z" fill="#14b8a6"/>
        <path transform="translate(314,626)" d="m0 0h47v62l-9-1-17-4-21-3z" fill="#fbbf24"/>
        <path transform="translate(759,498)" d="m0 0 1 3-6 11h-2l-1 4-14 15-10 7-3 1h-10l-1-1v-10l5-8 9-8 10-6 18-7z" fill="#fbbf24"/>
        <path transform="translate(602,458)" d="m0 0 5 3 11 14 6 10 4 11v8l-3 8-1 1h-7l-5-4-4-6-4-12-3-19v-13z" fill="#fbbf24"/>
        <path transform="translate(752,551)" d="m0 0h27l6 1-1 3-9 6-10 6-13 5-8 2h-8l-7-3-2-2 1-7 7-6 10-4z" fill="#fbbf24"/>
        <path transform="translate(658,448)" d="m0 0 3 4 4 16 2 12v13l-3 9-5 5h-6l-4-4-2-7v-16l3-14 7-17z" fill="#fbbf24"/>
        <path transform="translate(713,464)" d="m0 0 2 3-1 13-5 18-6 11-8 6-6 1-3-4v-12l4-10 7-11 9-10 5-4z" fill="#fbbf24"/>
        <path transform="translate(738,594)" d="m0 0 14 1 17 6 9 4-1 3-9 6-16 1-12-2-10-5-3-4 1-6 5-3z" fill="#fbbf24"/>
        <path transform="translate(613,651)" d="m0 0h7l2 3v8l-4 12-7 11-5 4-9 4h-3l2-16 6-15 9-10z" fill="#fbbf24"/>
        <path transform="translate(569,500)" d="m0 0 9 3 10 7 5 5 4 7 1 6-2 6-2 1h-7l-6-3-7-6-4-15z" fill="#fbbf24"/>
        <path transform="translate(715,628)" d="m0 0h8l12 6 6 7-15 3h-6l-6-7-1-8z" fill="#fbbf24"/>
        <path transform="translate(580,630)" d="m0 0h10l2 2v8l-6 9-5 5h-3v-10l1-13z" fill="#fbbf24"/>
      </g>
      
      {/* Texte */}
      <g>
        <text 
          x="310" 
          y="140" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontSize="42" 
          fontWeight="700" 
          fill="#0d9488"
        >
          Les Clés du Cabanon
        </text>
        <text 
          x="310" 
          y="175" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontSize="20" 
          fontWeight="500" 
          fill="#14b8a6"
        >
          Conciergerie Airbnb Premium
        </text>
      </g>
    </svg>
  );
}

// Export de compatibilité pour logoImage
export const logoImage = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCkiIGQ9Im0wIDBoMTAyNHYxMDI0aC0xMDI0eiIgZmlsbD0iI0ZDRkNGQyIvPjxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgyNSw1OTMpIiBkPSJtMCAwaDFsLTEgMTMtNiAyNC02IDE4LTEwIDIzLTEwIDE5LTExIDE4LTE0IDE5LTkgMTEtMTIgMTMtMjEgMjEtMTEgOS0xNCAxMS0yMSAxNC0yMSAxMi0yNCAxMS0yOCAxMC0yNyA3LTI0IDQtMTcgMmgtNTFsLTM1LTUtMzItOC0yOC0xMC0yNC0xMS0yMC0xMS0xOC0xMi0xOS0xNC0xNS0xMy0yMy0yMy05LTExLTEyLTE2LTEwLTE1LTMtNXYtMmwxOC01IDE4LTMgMTItMWgxNmwyMiAyIDI0IDUgMjMgNyAyMyAxMCAyMCAxMCAyNCAxNCAxOCAxMCAxOSA4IDIxIDYgMjUgNSA4IDFoNDVsMjctNCAxOS01IDIwLTggMTYtOCAxNC05IDEzLTExIDgtNyAxMC0xMCA5LTExIDExLTE1IDgtMTIgOS0xMiAxMS0xMyAxNC0xNCAxMy0xMCAyMC0xMiAxNi03eiIgZmlsbD0iIzBkOTQ4OCIvPjxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwNCwzNTkpIiBkPSJtMCAwIDExIDEgMTAgNSA2IDkgMSAzdjdsLTMgOC00IDYgNCA1IDEwIDE5IDEwIDI2IDcgMjQgNiAyNSA2IDMyIDQgMjkgMiAyNCAxIDM4LTIgNDAtNCAzMy0yIDExLTggMy0zOSAxMi00NiAxMC0xMiAyaC05djJsMzUtMyAyNC00IDMwLTcgMjYtOCAzNC0xMyAzNi0xNiAzMS0xNCAyNy0xMCAyMy02IDEyLTItMiA1LTE3IDI1LTEwIDEzLTE0IDE1LTEzIDEyLTE0IDEwLTE0IDgtMTUgNy0yMSA3LTIwIDQtMTYgMmgtNDJsLTIwLTMtMjgtNy0xOS03LTE0LTd2LTJsLTUtMS0yMS0xMi0xMS02LTEtMTAzLTEwLTktMTItMTEtMTAtOS0xMi0xMS04LTctMTItMTEtMTAtOWgtNGwtMTYgMTUtOCA3LTEzIDEyLTEwIDktMTMgMTItMTAgOS00IDJ2NzNsLTEwIDNoLTV2LTY0bC02IDYtNC0yLTktOSAyLTQgMTUtMTQgOC03IDEwLTkgMS00NGgyNHYyMWw4LTggOC03IDEyLTExIDIwLTE4IDUgMiA4IDggOCA3IDEzIDEyIDggNyAxMyAxMiAxMiAxMSA4IDcgMTIgMTEgOCA3IDEyIDExIDUgNS0xMiAxMi00LTItMy0ydjc4bDI5IDYgMjEgMyAxMyAxaDExbDgtMTggNy0yMiA2LTI2IDUtMzUgMi0yOHYtNDlsLTItMjYtNS0zNy03LTMyLTgtMjctMS0zLTEgMjktMSA4LTQtNS00LTYgNCAzM3YxMmwtNC01LTEwLTE0IDMgMjIgMiAyNy00LTQtOS0xNCA0IDQ2aC0ybC05LTE1LTItMiAyIDM0djE2bC0zLTQtNy0xOS01LTIzLTEtN3YtMzhsNC0yMCA2LTE4IDktMTcgMTAtMTMgOC03LTgtNy00LTh2LTEybDQtOCA4LTd6IiBmaWxsPSIjMTRiOGE2Ii8+PHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjYyLDEyOCkiIGQ9Im0wIDBoMjB2MmwtMTQgNy0xOCAxMi0yMCAxNC0zIDIgMTItMmgxOWwxMCAyLTMgMi0yMSA3LTE4IDgtMjEgMTEgMTUtM2gyMWwxMSAzLTMgMi0xNSA0LTE4IDctMTcgOS0xMSA3IDE3LTQgMTctMSAxMCAxIDIgMi0yMSA4LTE2IDgtMTYgOS02IDQgMTYtNCA1LTFoN2wtNCAzLTE2IDExLTExIDEwLTggNy0xMCAxMC03IDgtOCAxMC0xMCAxNS0xMSAyMy00IDEyLTE2IDEtMTAtMTktMTMtMTctMTItMTMtMTEtMTAtMTYtMTItMy0zIDEyIDIgNyAyLTE1LTEwLTEzLTgtMTYtOS02LTN2LTFoMThsMTAgMi0xNS04LTIxLTktMjMtOCAzLTIgNC0xaDI1bDExIDItMjMtMTAtMjQtOC0xOS00IDEtMiAxMi0zaDMzbC0zMi0xNC0yNS04LTQtMiA2LTIgOC0xaDExbDE1IDItMjEtMTMtMTgtMTAtMjAtMTB2LTFsNi0xaDI0bDE3IDMgMTYgNSAxNSA2IDE2IDkgMTEgOCAxNCAxMiA5IDExIDkgMTIgMTAgMTgtMy0xMC03LTE2LTktMTctMi0zIDUgMiA2IDQgMTAgOSA4IDEwIDkgMTUgOCAxNiA3IDE5IDYgMjMgNSAyOSAyIDIwIDEgMSAzLTI0IDUtMjUgNi0yMCA4LTIwIDktMTcgMTEtMTcgMTEtMTQgMTItMTMgMTAtMTAgMTQtMTEgMTAtNyAxNi05IDE2LTcgMTgtNXoiIGZpbGw9IiMxNGI4YTYiLz48cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2NTIsNTEzKSIgZD0ibTAgMCAxNCAxIDE2IDUgMTAgNSAxMCA4IDIgNCA0IDIgOCAxMiA1IDE0IDIgOXYxOWwtNCAxNi04IDE1LTQgNmgtMmwtMiA0LTggNy0xNCA4LTEzIDQtNCAxaC0yNGwtMTYtNS0xMS02LTEwLTktNS01LTctMTAtNi0xNi0yLTEwdi0xNmwzLTE1IDQtMTAgNS04IDktMTAgOS04IDE0LTcgMTUtNHoiIGZpbGw9IiNmYmJmMjQiLz48cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MDEsMzM4KSIgZD0ibTAgMGgzNGwyNCAzIDI0IDYgMTkgNyAyMyAxMiAxMiA5IDE0IDEyIDEwIDExIDExIDE1IDkgMTYgOCAxOSA2IDIyIDIgMTYtNS01LTktMTAtNy04LTctNy03LTgtMTgtMTggNiAzMHY4bC00LTUtOC0xNC0xNC0yMS0xMC0xMyA1IDI1djloLTJsLTEwLTE2LTgtMTEtMTUtMjEgNSAyMCAxIDd2MTFsLTQtNC05LTEzLTEwLTEzLTgtMTAtNC00IDYgMTggMSA3djhsLTUtNS04LTEwLTktMTAtMTQtMTYgNSAxOCAxIDV2MTJsLTQtNC0xMS0xNC0xNi0xNy02LTYgNiAxNSAyIDd2N2wtNC00LTctOC0xMi0xMS0xMC03IDEgNCAzIDE1aC0ybC01LTUtMTAtOC0xNi05LTUtMy01LTEwLTQtNSAxNy04IDE4LTYgMjItNXoiIGZpbGw9IiMxNGI4YTYiLz48cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MDYsMzUyKSIgZD0ibTAgMGgzMWwxOSAzIDE1IDQgMTAgNHY0bC0zIDctMiAxMS0xMiAxMS05IDEzLTIgMy0xLTMgMi0xOS04IDktNyAxMC03IDExLTUgOGgtMXYtMTZsMy0xNi0xMCAxNS0xNSAyNS00IDctMi00di0xOGwyLTEzLTkgMTYtMTIgMjMtNCA4aC0ybC0xLTd2LTE5bDEtMTAtMTIgMjMtOCAxNC03IDE1aC0xbC0xLTZ2LTE2bDItMTktMTAgMTgtMTcgMzYtMiAzLTEtM3YtMjBsMi0xNi0xNCAyNy0xMiAyNi0yLTF2LTE2bDMtMjAtMSAxLTEwIDEzLTEzIDE4LTEyIDE4LTUgMTBoLTF2LTIzbDMtMTkgNi0yMSA5LTIwIDEwLTE2IDExLTEzIDExLTEyIDE0LTEyIDE0LTEwIDE4LTEwIDIwLTggMTktNXoiIGZpbGw9IiMxNGI4YTYiLz48cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMTQsNjI2KSIgZD0ibTAgMGg0N3Y2MmwtOS0xLTE3LTQtMjEtM3oiIGZpbGw9IiNmYmJmMjQiLz48cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NTksNDk4KSIgZD0ibTAgMCAxIDMtNiAxMWgtMmwtMSA0LTE0IDE1LTEwIDctMyAxaC0xMGwtMS0xdi0xMGw1LTggOS04IDEwLTYgMTgtN3oiIGZpbGw9IiNmYmJmMjQiLz48cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MDIsNDU4KSIgZD0ibTAgMCA1IDMgMTEgMTQgNiAxMCA0IDExdjhsLTMgOC0xIDFoLTdsLTUtNC00LTYtNC0xMi0zLTE5di0xM3oiIGZpbGw9IiNmYmJmMjQiLz48cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NTIsNTUxKSIgZD0ibTAgMGgyN2w2IDEtMSAzLTkgNi0xMCA2LTEzIDUtOCAyaC04bC03LTMtMi0yIDEtNyA3LTYgMTAtNHoiIGZpbGw9IiNmYmJmMjQiLz48cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2NTgsNDQ4KSIgZD0ibTAgMCAzIDQgNCAxNiAyIDEydjEzbC0zIDktNSA1aC02bC00LTQtMi03di0xNmwzLTE0IDctMTd6IiBmaWxsPSIjZmJiZjI0Ii8+PHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzEzLDQ2NCkiIGQ9Im0wIDAgMiAzLTEgMTMtNSAxOC02IDExLTggNi02IDEtMy00di0xMmw0LTEwIDctMTEgOS0xMCA1LTR6IiBmaWxsPSIjZmJiZjI0Ii8+PHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzM4LDU5NCkiIGQ9Im0wIDAgMTQgMSAxNyA2IDkgNC0xIDMtOSA2LTE2IDEtMTItMi0xMC01LTMtNCAxLTYgNS0zeiIgZmlsbD0iI2ZiYmYyNCIvPjxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYxMyw2NTEpIiBkPSJtMCAwaDdsMiAzdjhsLTQgMTItNyAxMS01IDQtOSA0aC0zbDItMTYgNi0xNSA5LTEweiIgZmlsbD0iI2ZiYmYyNCIvPjxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU2OSw1MDApIiBkPSJtMCAwIDkgMyAxMCA3IDUgNSA0IDcgMSA2LTIgNi0yIDFoLTdsLTYtMy03LTYtNC0xNXoiIGZpbGw9IiNmYmJmMjQiLz48cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MTUsNjI4KSIgZD0ibTAgMGg4bDEyIDYgNiA3LTE1IDNoLTZsLTYtNy0xLTh6IiBmaWxsPSIjZmJiZjI0Ii8+PHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTgwLDYzMCkiIGQ9Im0wIDBoMTBsMiAydjhsLTYgOS01IDVoLTN2LTEwbDEtMTN6IiBmaWxsPSIjZmJiZjI0Ii8+PHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjUwLDY2MCkiIGQ9Im0wIDAgNSAxIDIgNS01IDMtMTAgNCAxLTUgNS03eiIgZmlsbD0iI2ZiYmYyNCIvPjxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUyNSw1NTIpIiBkPSJtMCAwaDJ2NmwtNi0xLTEtM3oiIGZpbGw9IiNmYmJmMjQiLz48L3N2Zz4=';
