 // If you want to add a new resource, add a new object to the resources array.

export const resources = [
    { category: 'Tools', title: 'Pwntools', link: 'https://github.com/Gallopsled/pwntools', description: 'A set of tools used extensively for CTFs.' },
    { category: 'Tools', title: 'Cutter', link: 'https://github.com/radareorg/cutter', description: 'A GUI overlay for radare2, excellent for reverse engineering.' },
    { category: 'Tools', title: 'Ghidra', link: 'https://ghidra-sre.org/', description: 'A reverse engineering tool developed by the NSA.' },
    { category: 'Tools', title: 'Binwalk', link: 'https://tools.kali.org/forensics/binwalk', description: 'A very helpful forensics and reverse engineering tool for finding markers for what kinds of files are contained in a file.' },
    { category: 'Tools', title: 'Stegosuite', link: 'https://stegosuite.org/', description: 'Tool for hiding information in image files.' },
    { category: 'Tools', title: 'Linux Subsystem For Windows', link: 'https://www.howtogeek.com/265900/everything-you-can-do-with-windows-10s-new-bash-shell/', description: 'A good tool for getting a linux terminal in any Windows 10 machine.' },
    { category: 'Tools', title: 'Kali Linux', link: 'https://www.kali.org/', description: 'A linux build designed for information security and penetration testing with lots of tools already installed.' },
    { category: 'Guides', title: 'AwesomeCTF', link: 'https://github.com/apsdehal/awesome-ctf', description: 'A long list of resources, guides, and CTFs for practice.' },
    { category: 'Guides', title: 'CTF101', link: 'https://ctf101.org/', description: 'A wiki and guidebook that serves as a good introduction to the categories in CTFs.' },
    { category: 'Guides', title: 'CTF Wiki', link: 'https://ctf-wiki.github.io/ctf-wiki/', description: 'Another wiki for helpful CTF information.' },
    { category: 'Guides', title: 'CTF Field Guide', link: 'https://trailofbits.github.io/ctf/index.html', description: 'A few useful guides for some of the more basic skills needed in CTFs.' },
    { category: 'Guides', title: 'String Format Vulnerabilities', link: 'https://cs155.stanford.edu/papers/formatstring-1.2.pdf', description: 'An excellent written guide to string vulnerabilities.' },
    { category: 'Guides', title: 'LiveOverflow', link: 'https://www.liveoverflow.com', description: 'A guy who started a youtube channel devoted to hacking/pen testing/CTFs, now a great site and resource for learning about infosec skills.' },
    { category: 'Courses', title: 'Network Academy', link: 'https://www.netacad.com/courses/security', description: 'Created by Cisco, this has a lot of courses in various areas of information security.' },
    { category: 'Practice Sites', title: 'Penetration Testing Practice Lab', link: 'https://www.amanhardikar.com/mindmaps/Practice.html', description: 'A looong list of sites and machines to practice penetration testing.' },
    { category: 'Practice Sites', title: 'TryHackMe', link: 'https://tryhackme.com/', description: 'A learning-oriented VM box hacking website.' },
    { category: 'Practice Sites', title: 'HackTheBox', link: 'https://www.hackthebox.eu/', description: 'A site known for the challenge it provides.' },
    { category: 'CTF Practice', title: 'PicoCTF', link: 'https://picoctf.com/', description: 'The site we use to practice in our workshops. A beginner friendly CTF site, and the largest CTF in the world.' },
    { category: 'CTF Practice', title: 'CTFLearn', link: 'https://ctflearn.com/', description: 'A long list of challenges and problems to try.' },
    { category: 'CTF Practice', title: 'HackMe', link: 'https://hack.me/', description: 'CTF practice problems.' },
    { category: 'CTF Practice', title: 'RootMe', link: 'https://www.root-me.org/?lang=en', description: 'CTF practice problems.' },
    { category: 'CTF Practice', title: 'OverTheWire', link: 'https://overthewire.org', description: 'Network and computer security challenges.' },
    { category: 'CTF Tracking', title: 'CTFtime', link: 'https://ctftime.org/', description: 'Create a profile and track your progress as you compete in CTFs. It also tracks upcoming CTFs, teams, and has an archive of past CTFs and writeups for many previous CTFs.' },
    { category: 'CTF Tracking', title: 'Major League Cyber', link: 'https://www.majorleaguecyber.org/', description: 'Another great site for creating a profile and tracking your progress as you compete in CTFS.' },
    { category: 'CTF Tracking', title: 'WeChall', link: 'https://www.wechall.net/', description: 'Another tracking site for CTFs.' },
    { category: 'Assembly', title: 'Guide to x86 Assembly', link: 'https://www.cs.yale.edu/flint/cs421/papers/x86-asm/asm.html', description: 'A good overall guide to assembly, but not an easy or accessible read!' },
    { category: 'Assembly', title: 'Jump Guide', link: 'http://www.unixwiz.net/techtips/x86-jumps.html', description: 'A list of the jump codes for AT&T assembly.' },
    { category: 'Assembly', title: 'X86 Assembly Wiki', link: 'https://en.wikibooks.org/wiki/X86_Assembly', description: 'A good book/resource for instructions.' },
    { category: 'Forensics', title: 'File Signatures List', link: 'https://www.garykessler.net/library/file_sigs.html', description: 'A good list of the hex signatures.' },
    { category: 'Bug Bounties', title: 'HackerOne', link: 'https://www.hackerone.com/internet-bug-bounty', description: 'A site dedicated to providing bug bounties for security vulnerabilities found in popular programming languages.' },
    { category: 'Cryptography', title: 'Learn Cryptography', link: 'https://privacycanada.net/learn-cryptography-acquired-privacy-canada/', description: 'A good site for learning cryptography from the ground up.' },
    { category: 'Cryptography', title: 'Cryptopals', link: 'https://cryptopals.com/', description: 'A site with a lot of hands on practice for learning basic cryptography.' },
    { category: 'Youtube Channels', title: 'LiveOverflow', link: 'https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w', description: 'The youtube side of LiveOverflow.com.' },
    { category: 'Youtube Channels', title: 'John Hammond', link: 'https://www.youtube.com/channel/UCVeW9qkBjo3zosnqUbG7CFw', description: 'Some really great beginner guides for CTFs. John does a great job at taking his time to explain what is happening and how it works.' },
    { category: 'Youtube Channels', title: 'Network Chuck', link: 'https://www.youtube.com/c/NetworkChuck', description: 'A channel that focuses on networking in the field of information security.' }
];