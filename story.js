
// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// Initialize feedback modal as hidden
const feedbackModal = document.getElementById('feedback-modal');
if (feedbackModal) {
    feedbackModal.style.display = 'none';
}


// Story data
const stories = {
    prince: {
        title: "The Mask of a Prince",
        category: "Fantasy",
        content: `
            <img src="image/1.jpg" alt="Prince Leon and Princess Elena" loading="eager">
            <h2>Once Upon a Time</h2>
            <p>In a faraway kingdom, a young prince named Leon lived a life of luxury, poised to inherit the throne of Verdantia. However, beneath the glittering façade of royal life, Leon felt a profound emptiness. He longed for genuine love, a connection that transcended the superficial nature of the court.</p>
            <p>Every day, the grand halls of the castle were filled with noble ladies, all vying for the prince's attention. They wore shimmering gowns and spoke with sweet voices, but Leon could see through their rehearsed lines and practiced smiles. None seemed to care about the real him; they only desired his title and the luxurious life that came with it.</p>
            <p>Heartbroken, Leon made a bold decision: he would disguise himself as a commoner and venture into the bustling village beyond the castle walls to find someone who would love him for who he truly was.</p>
            <p>One moonlit night, Leon donned a simple cloak, traded his princely attire for worn-out clothes, and slipped away from the castle. He took a deep breath, feeling both exhilarated and nervous as he stepped into the vibrant streets of Verdantia.</p>
            <p>As he wandered through the lively marketplace, he marveled at the authenticity of the villagers. They were carefree, filled with joy that seemed to evade him within the confines of the castle. Leon approached a group of children playing with a makeshift ball made of rags and leaves. Joining them, he laughed and kicked the ball, forgetting his royal burdens for a moment.</p>
            <p>Days turned into weeks as Leon explored the village under his disguise. He worked at a local bakery, where he learned to knead dough and bake bread. He made friends with the townsfolk, sharing stories and laughter, but still, he felt something was missing.</p>
            <h2>Meeting Elena</h2>
            <p>It was then that he met Elena, a spirited young woman known for her bright smile and kind heart. She had a fiery passion for life, always helping her neighbors and nurturing the community. Leon was drawn to her warmth, and they quickly became friends.</p>
            <p>They spent long afternoons together, talking about their dreams and aspirations, and exploring the rolling hills surrounding the village. As time passed, Leon found himself falling for her. Elena, too, seemed to sense a deeper connection, but he hesitated to reveal his true identity, fearing that once she learned he was a prince, she would see him as nothing more than a title.</p>
            <p>One afternoon, while walking through a meadow filled with wildflowers, Elena looked at Leon with a serious expression. "You know, there's something about you that feels different. You carry a weight on your shoulders. What is it?"</p>
            <p>Leon's heart raced. Should he tell her the truth? He took a deep breath and began to share his story. He told her about the pressures of being a prince, the loneliness that came with it, and how he had disguised himself to find someone who would love him for who he truly was.</p>
            <p>Elena listened intently, her eyes wide with surprise. "You mean you're a prince? All this time, you've been pretending to be someone else?"</p>
            <p>"Yes," he admitted, his voice low. "I thought I could find someone who loves me, not for my title, but for who I am. But now I fear I've lost something precious."</p>
            <p>Elena looked down, contemplating his words. "Leon, I care for you deeply. It doesn't matter to me what title you hold. You have shown me kindness, laughter, and friendship. I fell in love with the man, not the prince."</p>
            <p>Relief washed over him, and he took her hands in his. "You truly mean that?"</p>
            <p>"Of course! You are brave and genuine, and that is what I admire most about you," she replied, her voice steady.</p>
            <p>With newfound courage, Leon kissed her softly, realizing that he had found exactly what he had been searching for—a love that was real and true.</p>
            <h2>A Royal Return</h2>
            <p>Leon knew he had to return to the castle, not only to ease his father's worries but to make a decision about his future. He took Elena back to the castle, their hands intertwined, hearts racing.</p>
            <p>As they entered the grand hall, the courtiers gasped in disbelief. The king stood up, his face a mixture of anger and relief. "Leon! Where have you been? We feared you were lost!"</p>
            <p>"I was lost, Father," Leon replied, his voice strong. "But I found my way back, and I've discovered something far more valuable than riches or titles."</p>
            <p>With that, he stepped aside and introduced Elena to the court. "This is Elena, the woman who has shown me the true meaning of love. I wish to marry her."</p>
            <p>The room fell silent. The king, after a moment of shock, stepped forward. "You wish to marry a commoner? Why, my son?"</p>
            <p>Leon looked at his father with determination. "Because she loves me for who I am, not for my crown. She brings me joy and laughter, something I've never found in the court. I want to be happy."</p>
            <img src="image/1a.jpg" alt="Leon And His Father" loading="eager">
            <h2>A Royal Blessing</h2>
            <p>After what felt like an eternity, the king's stern expression softened. "If she makes you happy, then I will accept her as my daughter-in-law. A true king should always seek happiness, even if it lies outside the bounds of tradition."</p>
            <p>Cheers erupted in the hall as the courtiers welcomed Elena. The royal wedding was a grand celebration, a joyous union of love that brought the kingdom together.</p>
            <p>Leon and Elena ruled Verdantia with compassion and understanding, always prioritizing the well-being of their people. They often visited the village, never forgetting the roots of their love.</p>
            <p>And so, the prince who had pretended to be a commoner found his true identity in love, and they lived happily ever after, proving that the most important title one could hold is that of being true to oneself.</p>
            <h3>The End!</h3>
        `
    },
    brother: {
        title: "The Stingy Brother",
        category: "Drama",
        content: `
            <img src="image/2.jpg" alt="Edwin and Elliot" loading="eager">
            <h2>A Tale of Two Brothers</h2>
            <p>In the charming village of Willowdale, nestled between rolling hills and winding streams, two brothers, Edwin and Elliot, lived vastly different lives. Edwin, the elder, was notorious for his parsimony, hoarding every coin and possession.</p>
            <p>Elliot, on the other hand, had a heart of gold, always willing to lend a helping hand. Their differing values created tension between them, but their love for each other remained strong.</p>
            <p>One fateful day, Elliot approached Edwin with a desperate plea. "Brother, I need your help. Our neighbor, Mrs. Jenkins, faces eviction. Her illness has left her unable to pay rent. Her family will be on the streets if we don't act."</p>
            <p>Edwin scoffed, "Not my concern. She should've managed her affairs better. I won't waste my hard-earned wealth on someone else's mistakes."</p>
            <p>Elliot persisted, explaining the consequences of inaction, but Edwin refused. That night, a fierce storm ravaged Willowdale, and a fire broke out, spreading rapidly.</p>
            <p>The village was engulfed in flames, and Edwin's grand mansion was destroyed, burning his wealth and possessions. He lost everything.</p>
            <img src="image/2a.jpg" alt="Edwin Mansion Burning" loading="eager">
            <h2>A Cruel Twist of Fate</h2>
            <p>As Edwin wandered the ashes of his home, he stumbled upon Mrs. Jenkins, who had also lost everything. Despite her own struggles, she took Edwin in, sharing her last bread and shelter.</p>
            <p>Edwin was taken aback by her kindness. "Why are you helping me? I refused to aid you," he asked.</p>
            <p>Mrs. Jenkins smiled. "We're all in this together, Edwin. Your brother Elliot helped us when you wouldn't. Now, it's my turn to help you."</p>
            <p>Edwin realized too late that his stinginess had cost him everything: his wealth, his home, and his dignity. He felt the weight of his mistakes.</p>
            <p>Elliot found Edwin, broken and destitute. "Brother, I'm sorry," Edwin whispered, tears streaming down his face. "I understand now. My greed destroyed me."</p>
            <p>Elliot embraced him. "You're forgiven, brother. Let's rebuild together."</p>
            <h2>A New Beginning</h2>
            <p>Edwin learned from his mistakes, and the brothers rebuilt their lives, focusing on kindness and generosity. They helped rebuild Willowdale, supporting those affected by the fire.</p>
            <p>The village prospered once more, and the brothers' bond grew stronger.</p>
            <p>Edwin became known for his compassion, and his story served as a cautionary tale about the dangers of greed.</p>
            <h3>The End.</h3>
        `
    },
    lighthouse: {
        title: "The Lighthouse Keeper's Daughter",
        category: "Romance",
        content: `
            <img src="image/1.jpg" alt="Lighthouse and ocean" loading="eager">
            <h2>The Storm</h2>
            <p>Maya had lived in the lighthouse all her life, tending the beacon that guided ships safely to shore. Her father, the lighthouse keeper, had taught her everything about the sea and its moods. But nothing could have prepared her for the night that changed everything.</p>
            <p>The storm was unlike any other—waves crashed against the rocky shore with such force that the lighthouse trembled. Maya watched from the lantern room as lightning illuminated the churning waters below.</p>
            <p>Then she saw him—a figure clinging to a piece of driftwood, being tossed by the merciless waves. Without hesitation, Maya rushed down to the shore, braving the storm to pull him to safety.</p>
            <p>He was unconscious when she dragged him into the lighthouse, but his breathing was steady. Maya tended to his wounds, wondering who he was and how he had come to be in the water during such a terrible storm.</p>
            <h2>The Stranger</h2>
            <p>When he awoke, his eyes were the color of the sea at dawn—deep blue with flecks of green. "Where am I?" he asked, his voice hoarse from the salt water.</p>
            <p>"You're safe now," Maya replied. "I found you in the storm. I'm Maya, the lighthouse keeper's daughter."</p>
            <p>He introduced himself as Alex, a merchant sailor whose ship had been caught in the storm. "I thought I was going to die out there," he said, his voice filled with gratitude.</p>
            <p>As the days passed and the storm continued to rage, Maya and Alex found themselves drawn to each other. They talked for hours about their dreams, their fears, and their hopes for the future. Alex told her about the distant lands he had visited, and Maya shared stories of the sea and the lighthouse that had been her home.</p>
            <h2>Love Blossoms</h2>
            <p>When the storm finally passed and the sea calmed, Alex knew he had to leave. But his heart had found something precious in the lighthouse keeper's daughter—a love as deep and true as the ocean itself.</p>
            <p>"Maya," he said as they stood on the shore, "I don't want to leave you. I want to stay here, with you, forever."</p>
            <p>Maya's heart soared. "I want that too, Alex. But what about your life at sea? Your adventures?"</p>
            <p>Alex smiled. "I've found my greatest adventure right here, with you. The sea will always be a part of me, but my heart belongs to you and this lighthouse."</p>
            <p>And so, Alex stayed, learning the ways of the lighthouse keeper. He and Maya tended the beacon together, their love shining as brightly as the light that guided ships safely home.</p>
            <h3>The End</h3>
        `
    },
    dragon: {
        title: "The Last Dragon Rider",
        category: "Fantasy",
        content: `
            <img src="image/2.jpg" alt="Dragon and rider" loading="eager">
            <h2>The Discovery</h2>
            <p>In the kingdom of Eldoria, dragons were thought to be extinct. The great beasts had vanished centuries ago, leaving behind only legends and myths. But young Aria, a scholar and adventurer, never stopped believing they still existed somewhere in the world.</p>
            <p>One day, while exploring the ancient Dragon's Peak, Aria discovered something that would change everything—a single, perfectly preserved dragon egg, hidden deep within a crystal cave.</p>
            <p>The egg pulsed with a warm, golden light, and Aria could feel the life within it. Her heart raced as she realized what this meant. Dragons weren't extinct—they were just waiting to be reborn.</p>
            <p>Carefully, Aria carried the egg back to her home, where she built a special chamber to keep it warm and safe. She spent every day tending to it, reading ancient texts about dragon care, and hoping for the day when it would hatch.</p>
            <h2>The Hatching</h2>
            <p>Months passed, and then one morning, Aria heard a sound that made her heart leap—a soft cracking noise coming from the egg. She rushed to the chamber and watched in amazement as the egg began to split open.</p>
            <p>Out emerged the most beautiful creature Aria had ever seen—a small dragon with scales that shimmered like liquid gold and eyes that sparkled with ancient wisdom. The dragon looked at Aria with recognition, as if it had been waiting for her all along.</p>
            <p>"Hello, little one," Aria whispered, extending her hand. The dragon nuzzled against her palm, and in that moment, a bond was formed that would last a lifetime.</p>
            <p>Aria named the dragon Aurelius, after the legendary dragon king from the old stories. As Aurelius grew, so did their bond. He learned to fly, and Aria learned to ride, soaring through the skies together in perfect harmony.</p>
            <h2>The Return of Magic</h2>
            <p>Word of Aria and Aurelius spread throughout the kingdom, and people came from far and wide to see the last dragon and his rider. But not everyone was pleased with their return.</p>
            <p>An evil sorcerer, who had been using dark magic to control the kingdom, saw Aurelius as a threat to his power. He sent his minions to capture the dragon, hoping to use its power for his own evil purposes.</p>
            <p>But Aria and Aurelius were ready. Together, they fought against the sorcerer's forces, using their bond and the ancient magic that flowed between them. In the end, good triumphed over evil, and the kingdom was saved.</p>
            <p>With the sorcerer defeated, magic began to return to the land. Other dragons, long thought extinct, began to emerge from their hiding places, drawn by the presence of Aurelius and the hope he represented.</p>
            <p>Aria became known as the Dragon Queen, and she and Aurelius ruled the kingdom with wisdom and compassion, ensuring that dragons and humans could live together in peace once more.</p>
            <h3>The End</h3>
        `
    },
    library: {
        title: "The Vanishing Library",
        category: "Mystery",
        content: `
            <img src="image/3.jpg" alt="Mysterious library" loading="eager">
            <h2>The Disappearing Books</h2>
            <p>Librarian Eleanor had worked at the Grand Library for over twenty years, and she knew every book, every shelf, every corner of the vast building. But something strange was happening—books were disappearing from the shelves at night, only to reappear in different locations the next morning.</p>
            <p>At first, Eleanor thought it was just students misplacing books, but the pattern was too consistent. Every night, exactly seven books would vanish, and every morning, they would be found in the most unexpected places—stacked in perfect pyramids, arranged in alphabetical order by color, or even floating in mid-air.</p>
            <p>Eleanor decided to investigate. She set up cameras, installed motion sensors, and even spent several nights hiding in the library, but she never saw anyone or anything that could explain the phenomenon.</p>
            <p>Then one night, as she was working late, Eleanor heard a soft whisper coming from the ancient texts section. She followed the sound and discovered something that would change her understanding of the library forever.</p>
            <h2>The Secret</h2>
            <p>In the deepest, darkest corner of the library, Eleanor found a hidden door that she had never noticed before. Behind it was a small room filled with the most beautiful books she had ever seen—books that seemed to glow with their own inner light.</p>
            <p>And there, sitting among the books, was an elderly man with kind eyes and a gentle smile. "Ah, Eleanor," he said, "I've been waiting for you to find me."</p>
            <p>The man introduced himself as Marcus, the original librarian who had built the Grand Library over a hundred years ago. But he wasn't just any librarian—he was a guardian of knowledge, tasked with protecting the world's most important books from those who would misuse them.</p>
            <p>"The books that disappear each night are being moved to safety," Marcus explained. "There are forces in the world that seek to destroy knowledge, to keep people ignorant and controlled. I move the books to protect them, to keep them safe until the world is ready for their wisdom."</p>
            <h2>The Mission</h2>
            <p>Marcus revealed that Eleanor had been chosen to be his successor, to continue the important work of protecting knowledge and ensuring that truth and wisdom would never be lost to the world.</p>
            <p>He taught her the ancient art of book whispering, the ability to communicate with books and understand their true nature. Eleanor learned that books were not just collections of words, but living repositories of human experience, emotion, and wisdom.</p>
            <p>Together, Eleanor and Marcus worked to protect the library's most precious volumes, moving them to safety when danger threatened, and returning them when it was safe for the world to learn from them again.</p>
            <p>Eleanor became the new guardian of knowledge, and the library became not just a place to store books, but a sanctuary where wisdom was preserved and protected for future generations.</p>
            <h3>The End</h3>
        `
    }
};

// Search and filter functionality
const searchInput = document.getElementById('story-search');
const filterButtons = document.querySelectorAll('.filter-btn');
const storyCards = document.querySelectorAll('.story-card');

if (searchInput) {
    searchInput.addEventListener('input', filterStories);
}

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterStories();
    });
});

function filterStories() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const activeCategory = document.querySelector('.filter-btn.active')?.dataset.category || 'all';
    
    storyCards.forEach(card => {
        const title = card.dataset.title.toLowerCase();
        const category = card.dataset.category;
        
        const matchesSearch = title.includes(searchTerm);
        const matchesCategory = activeCategory === 'all' || category === activeCategory;
        
        if (matchesSearch && matchesCategory) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Story modal functionality
const storyModal = document.getElementById('story-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

// Read story buttons
document.querySelectorAll('.read-story-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const storyId = btn.dataset.story;
        if (stories[storyId]) {
            modalTitle.textContent = stories[storyId].title;
            modalBody.innerHTML = stories[storyId].content;
            storyModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
if (closeModal) {
    closeModal.addEventListener('click', () => {
        storyModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

// Close modal when clicking outside
if (storyModal) {
    storyModal.addEventListener('click', (e) => {
        if (e.target === storyModal) {
            storyModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Feedback form
const form = document.getElementById('feedback-form');
const result = document.getElementById('result');
const closeFeedback = document.querySelector('.close-feedback');

// Feedback form submission
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        
        if (result) {
            result.innerHTML = "Please wait...";
            result.style.display = "block";
        }

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                if (result) {
                    result.innerHTML = "Thank you for your feedback!";
                    result.style.color = 'green';
                }
                form.reset();
                setTimeout(() => {
                    if (feedbackModal) {
                        feedbackModal.style.display = 'none';
                        document.body.style.overflow = 'auto';
                    }
                }, 2000);
            } else {
                console.log(response);
                if (result) {
                    result.innerHTML = json.message || "Something went wrong!";
                    result.style.color = 'red';
                }
            }
        })
        .catch(error => {
            console.log(error);
            if (result) {
                result.innerHTML = "Something went wrong!";
                result.style.color = 'red';
            }
        });
    });
}

// Close feedback modal
if (closeFeedback) {
    closeFeedback.addEventListener('click', () => {
        if (feedbackModal) {
            feedbackModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Show feedback modal after reading a story
function showFeedbackModal() {
    if (feedbackModal) {
        feedbackModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Add feedback button to story modal
document.addEventListener('DOMContentLoaded', () => {
    // Add feedback button to story modal
    const modalBody = document.getElementById('modal-body');
    if (modalBody) {
        const feedbackBtn = document.createElement('button');
        feedbackBtn.textContent = 'Share Feedback';
        feedbackBtn.className = 'feedback-btn';
        feedbackBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--gradient-primary);
            color: var(--background-darker);
            border: none;
            padding: 1rem 1.5rem;
            border-radius: 25px;
            font-weight: 600;
            cursor: pointer;
            box-shadow: var(--shadow-medium);
            z-index: 1001;
        `;
        feedbackBtn.addEventListener('click', showFeedbackModal);
        document.body.appendChild(feedbackBtn);
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Category filter links in footer
document.querySelectorAll('.footer-section a[data-category]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.dataset.category;
        const filterBtn = document.querySelector(`[data-category="${category}"]`);
        if (filterBtn) {
            filterButtons.forEach(b => b.classList.remove('active'));
            filterBtn.classList.add('active');
            filterStories();
        }
    });
});
