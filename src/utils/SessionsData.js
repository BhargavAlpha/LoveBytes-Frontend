import love1 from '../assets/love1.jpg';
import love2 from '../assets/love2.jpg';
import love3 from '../assets/love3.jpg';
import love4 from '../assets/love4.jpg';
import love5 from '../assets/love5.jpg';
import  love6 from '../assets/love6.jpg';

const cards = [
    {
        id: 1,
        title: "Good Morning Love",
        type: "Romantic Message",
        category: "Morning Wishes",
        author: "John Doe",
        mood: "Sweet",
        imageUrl: love1,
        message: "Good morning, my love! Every day with you is a blessing. May your day be filled with happiness and warmth.",
        description: "A sweet morning message to make your loved one’s day brighter.",
        isFavorited: false
    },
    {
        id: 2,
        title: "I Miss You",
        type: "Romantic Message",
        category: "Long Distance",
        author: "Jane Smith",
        mood: "Emotional",
        imageUrl: love2,
        message: "I miss you more than words can say. Every moment apart from you feels like an eternity.",
        description: "An emotional message for when you're missing someone special.",
        isFavorited: false
    },
    {
        id: 3,
        title: "Anniversary Love",
        type: "Love Note",
        category: "Anniversary",
        author: "Emily Johnson",
        mood: "Romantic",
        imageUrl: love3,
        message: "Happy Anniversary, my love! Each year with you is more beautiful than the last. Here's to many more.",
        description: "Celebrate love and togetherness with this heartfelt anniversary message.",
        isFavorited: false
    },
    {
        id: 4,
        title: "Valentine's Day Message",
        type: "Love Note",
        category: "Valentine's Day",
        author: "John Doe",
        mood: "Affectionate",
        imageUrl: love4,
        message: "Happy Valentine's Day to the love of my life! My heart beats for you today and always.",
        description: "A loving message to celebrate the special bond on Valentine's Day.",
        isFavorited: false
    },
    {
        id: 5,
        title: "Just Because",
        type: "Romantic Message",
        category: "Random Acts of Love",
        author: "Jane Smith",
        mood: "Spontaneous",
        imageUrl: love5,
        message: "I just wanted to remind you how much I love you. No special occasion—just because.",
        description: "A spontaneous and heartfelt message to brighten your partner's day for no specific reason.",
        isFavorited: false
    },
    {
        id: 6,
        title: "Love You Forever",
        type: "Love Note",
        category: "Anniversary",
        author: "Emily Johnson",
        mood: "Romantic",
        imageUrl: love6,
        message: "To the love of my life: I love you more than words can express. You are my everything.",
        description: "A romantic message to express your eternal love and devotion.",
        isFavorited: false
    }
    ];

const messages = [
    {
        id: 1,
        title: "Good Morning Love",
        type: "Romantic Message",
        category: "Morning Wishes",
        isFavorited: false
    },
    {
        id: 2,
        title: "I Miss You",
        type: "Romantic Message",
        category: "Long Distance",
        isFavorited: false
    },
    {
        id: 3,
        title: "Anniversary Love",
        type: "Love Note",
        category: "Anniversary",
        isFavorited: false
    },
    {
        id: 4,
        title: "Valentine's Day Message",
        type: "Love Note",
        category: "Valentine's Day",
        isFavorited: false
    },
    {
        id: 5,
        title: "Just Because",
        type: "Romantic Message",
        category: "Random Acts of Love",
        isFavorited: false
    }
];

const sessionsData = { messages, cards };

export default sessionsData;
