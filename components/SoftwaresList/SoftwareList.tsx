import "./style.css";

interface Software {
  name: string;
  url: string;
  description: string;
  icon: string;
  category: string;
}

export default function SoftwareList() {
  const softwares: Software[] = [
    {
      name: "LibreOffice",
      url: "https://www.libreoffice.org/",
      description: "free office suite - word docs, spreadsheets, presentations, the works",
      icon: "📄",
      category: "productivity"
    },
    {
      name: "Krita",
      url: "https://krita.org/en/",
      description: "digital painting & illustration - actually really good for artists",
      icon: "🎨",
      category: "creative"
    },
    {
      name: "VS Code",
      url: "https://code.visualstudio.com/",
      description: "best code editor out there fight me (also download extensions!)",
      icon: "💻",
      category: "dev"
    },
    {
      name: "7-Zip",
      url: "https://www.7-zip.org/",
      description: "compress/extract files - works with literally everything",
      icon: "📦",
      category: "utility"
    },
    {
      name: "GIMP",
      url: "https://www.gimp.org/",
      description: "photoshop but free and open source (steeper learning curve tho)",
      icon: "🖼️",
      category: "creative"
    },
    {
      name: "VLC Media Player",
      url: "https://www.videolan.org/vlc/",
      description: "plays EVERYTHING. seriously. any video file you throw at it",
      icon: "🎬",
      category: "media"
    },
    {
      name: "Audacity",
      url: "https://www.audacityteam.org/download/",
      description: "audio editing - record, cut, edit, mix. simple but powerful",
      icon: "🎵",
      category: "media"
    },
    {
      name: "KeePass",
      url: "https://keepass.info/download.html",
      description: "password manager - offline, secure, no cloud bs",
      icon: "🔐",
      category: "security"
    },
    {
      name: "Atom",
      url: "https://atom-editor.cc/",
      description: "lightweight code editor - good alternative to vscode",
      icon: "⚛️",
      category: "dev"
    },
    {
      name: "Code::Blocks",
      url: "https://www.codeblocks.org/",
      description: "C/C++ IDE - old school but reliable for learning",
      icon: "🔧",
      category: "dev"
    },
    {
      name: "Notepad++",
      url: "https://notepad-plus-plus.org/downloads/",
      description: "text editor on steroids - fast, lightweight, essential",
      icon: "📝",
      category: "utility"
    },
    {
      name: "Master PDF Editor",
      url: "https://code-industry.net/masterpdfeditor/",
      description: "edit PDFs without adobe's overpriced garbage",
      icon: "📋",
      category: "productivity"
    }
  ];

  return (
    <div className="software-grid">
      {softwares.map((software, index) => (
        <div key={index} className="software-card">
          <div className="software-card-header">
            <span className="software-icon">{software.icon}</span>
            <div className="software-title-wrapper">
              <h3 className="software-name">{software.name}</h3>
              <span className="software-category">{software.category}</span>
            </div>
          </div>
          <p className="software-description">{software.description}</p>
          <a 
            href={software.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="software-link"
          >
            download →
          </a>
        </div>
      ))}
    </div>
  );
}
