//loadData.js

export const users = {
  1: {
    user_id: 1,
    user_name: "John Doe",
    email: "john.doe@example.com",
    password: "password123",
    user_type: "Admin",
    phone_number: "123-456-7890",
    profile_id: 101,
  },
  2: {
    user_id: 2,
    user_name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "password456",
    user_type: "Mentor",
    phone_number: "987-654-3210",
    profile_id: 102,
  },
  3: {
    user_id: 3,
    user_name: "Michael Brown",
    email: "michael.brown@example.com",
    password: "password789",
    user_type: "Advisor",
    phone_number: "555-555-5555",
    profile_id: 103,
  },
  4: {
    user_id: 4,
    user_name: "Alice Johnson",
    email: "alice.johnson@example.com",
    password: "password000",
    user_type: "Student",
    phone_number: "222-333-4444",
    profile_id: 104,
  },
  5: {
    user_id: 5,
    user_name: "Sarah Thompson",
    email: "sarah.thompson@example.com",
    password: "mentorpass1",
    user_type: "Mentor",
    phone_number: "312-555-0123",
    profile_id: 105,
  },
  6: {
    user_id: 6,
    user_name: "David Clark",
    email: "david.clark@example.com",
    password: "mentorpass2",
    user_type: "Mentor",
    phone_number: "645-456-7890",
    profile_id: 106,
  },
  7: {
    user_id: 7,
    user_name: "Emily Davis",
    email: "emily.davis@example.com",
    password: "mentorpass3",
    user_type: "Mentor",
    phone_number: "789-654-3210",
    profile_id: 107,
  },
  8: {
    user_id: 8,
    user_name: "Paul Garcia",
    email: "paul.garcia@example.com",
    password: "advisorpass1",
    user_type: "Advisor",
    phone_number: "444-555-6666",
    profile_id: 108,
  },
  9: {
    user_id: 9,
    user_name: "Laura White",
    email: "laura.white@example.com",
    password: "advisorpass2",
    user_type: "Advisor",
    phone_number: "777-888-9999",
    profile_id: 109,
  },
  10: {
    user_id: 10,
    user_name: "Mark Harris",
    email: "mark.harris@example.com",
    password: "advisorpass3",
    user_type: "Advisor",
    phone_number: "123-987-6543",
    profile_id: 110,
  }
};


export const forums = [
  { forum_id: 1, forum_name: "Machine Learning", forum_description: "A forum to discuss Machine Learning concepts, algorithms, and projects.", created_by: 1 },
  { forum_id: 2, forum_name: "Web Development", forum_description: "Explore web development trends, tools, and practices.", created_by: 2 },
  { forum_id: 3, forum_name: "Data Science", forum_description: "Discussions on data science, big data, and data analysis techniques.", created_by: 3 },
  { forum_id: 4, forum_name: "Artificial Intelligence", forum_description: "Forum to talk about AI applications, tools, and breakthroughs.", created_by: 1 },
  { forum_id: 5, forum_name: "Software Engineering", forum_description: "Share your insights on software engineering practices and methodologies.", created_by: 2 },
  { forum_id: 6, forum_name: "Cybersecurity", forum_description: "Discuss cybersecurity measures, tools, and technologies.", created_by: 3 },
  { forum_id: 7, forum_name: "Cloud Computing", forum_description: "Explore the world of cloud technologies and architecture.", created_by: 1 },
  { forum_id: 8, forum_name: "Blockchain", forum_description: "Talk about blockchain applications, cryptocurrencies, and smart contracts.", created_by: 2 },
  { forum_id: 9, forum_name: "Game Development", forum_description: "Game design and development discussions.", created_by: 3 },
  { forum_id: 10, forum_name: "Data Structures", forum_description: "Talk about fundamental data structures and algorithms.", created_by: 1 }
];


export const postsData = [
  {
    post_id: 1,
    posted_by: "John Doe",
    posted_date: "2024-10-01",
    posted_time: "10:00 AM",
    forum_id: 1,
    title: "Latest Trends in Machine Learning",
    content: "What are the latest trends in machine learning?",
    link: "/forums/1/posts/1",
    comments: []
  },
  {
    post_id: 2,
    posted_by: "Jane Smith",
    posted_date: "2024-10-02",
    posted_time: "11:30 AM",
    forum_id: 1,
    title: "Resources for Learning Reinforcement Learning",
    content: "Can anyone recommend good resources for learning reinforcement learning?",
    link: "/forums/1/posts/2",
    comments: []
  },
  {
    post_id: 3,
    posted_by: "Alice Johnson",
    posted_date: "2024-10-03",
    posted_time: "1:00 PM",
    forum_id: 1,
    title: "Best Practices for Deploying ML Models",
    content: "What are the best practices for deploying machine learning models?",
    link: "/forums/1/posts/3",
    comments: []
  },
  {
    post_id: 4,
    posted_by: "Bob Lee",
    posted_date: "2024-10-04",
    posted_time: "9:15 AM",
    forum_id: 1,
    title: "Improving Data Preprocessing Techniques",
    content: "How can I improve my data preprocessing techniques?",
    link: "/forums/1/posts/4",
    comments: []
  },
  {
    post_id: 5,
    posted_by: "Charlie Brown",
    posted_date: "2024-10-05",
    posted_time: "3:45 PM",
    forum_id: 2,
    title: "Experience with Transfer Learning",
    content: "Does anyone have experience with transfer learning?",
    link: "/forums/2/posts/5",
    comments: []
  },
  {
    post_id: 6,
    posted_by: "Diana Prince",
    posted_date: "2024-10-06",
    posted_time: "8:00 AM",
    forum_id: 2,
    title: "Common Pitfalls in Supervised Learning",
    content: "What are the most common pitfalls in supervised learning?",
    link: "/forums/2/posts/6",
    comments: []
  }
];


export const comments = [
  { comment_id: 1, by: "Jake", post_id: 1, comment_content: "Check out TensorFlow!", comment_datetime: "2024-10-02 12:30" },
  { comment_id: 2, by: "Emily", post_id: 2, comment_content: "Try OpenAI’s resources.", comment_datetime: "2024-10-03 14:00" },
  { comment_id: 3, by: "Mark", post_id: 1, comment_content: "I love using scikit-learn for ML projects!", comment_datetime: "2024-10-02 15:20" },
  { comment_id: 4, by: "Sophia", post_id: 3, comment_content: "Consider using Docker for deployment.", comment_datetime: "2024-10-04 10:10" },
  { comment_id: 5, by: "Lucas", post_id: 4, comment_content: "Data cleaning is crucial. Don't skip it!", comment_datetime: "2024-10-05 11:45" },
  { comment_id: 6, by: "Olivia", post_id: 5, comment_content: "Transfer learning can save you a lot of time!", comment_datetime: "2024-10-06 14:30" },
  { comment_id: 7, by: "Ethan", post_id: 6, comment_content: "Always validate your model on unseen data.", comment_datetime: "2024-10-07 09:00" },
];

export const tips = [
  {
    id: 1,    shortDescription: "Tailor your resume for each job.",    content: "When crafting your resume, you might study examples of resumes from your industry for inspiration and best practices. Samples are useful examples of high-quality resumes used in your industry and for your job title. While there are many ways you can use resume samples, there are three main takeaways to look for:Simplicity. Resume samples are straightforward because employers have minimal time to review your resume, so readability is key.Brevity. You may notice that each section of the resume sample is short and to the point, including the summary and experience descriptions. Including only the most key and relevant information means employers can consume more information about you and quickly understand your fitness for the role.Numbers. You might also notice that there are often metrics in the experience section of resume samples because employers are highly responsive to measurable proven value. For example, one bullet point under the experience description for an administrative assistant reads, Processed 100 vendor contracts and implemented a standardized process, reducing contract discrepancies by 90%.",
    postedBy: 10,
    postedDate: "2024-10-01",
  },
  {
    id: 2,    shortDescription: "Keep resumes concise.",    content: "Keep your resume concise and avoid unnecessary details.",
    postedBy: 2,
    postedDate: "2024-10-02",
  },
  {
    id: 3,    shortDescription: "Use action verbs.",    content: "Use strong action verbs to describe your achievements.",
    postedBy: 3,
    postedDate: "2024-10-03",
  },
  {
    id: 4,    shortDescription: "Quantify achievements.",    content: "Quantify your accomplishments with numbers.",
    postedBy: 1,
    postedDate: "2024-10-04",
  },
  {
    id: 5,    shortDescription: "Research company culture.",    content: "Research the company culture before an interview to better align your responses.",
    postedBy: 2,
    postedDate: "2024-10-05",
  },
  {
    id: 6,    shortDescription: "Send thank-you emails.",    content: "Follow up with a thank-you email after the interview to show appreciation.",
    postedBy: 3,
    postedDate: "2024-10-06",
  },
  {
    id: 7,    shortDescription: "Professional online presence.",    content: "Maintain a professional online presence, especially on LinkedIn.",
    postedBy: 5,
    postedDate: "2024-10-07",
  },
  {
    id: 8,    shortDescription: "Practice interview questions.",    content: "Practice common interview questions to reduce anxiety and boost confidence.",
    postedBy: 2,
    postedDate: "2024-10-08",
  },
  {
    id: 9,    shortDescription: "Use cover letters effectively.",    content: "Use a cover letter to highlight specific experiences that match the job.",
    postedBy: 5,
    postedDate: "2024-10-09",
  },
  {
    id: 10,    shortDescription: "Explain career changes positively.",    content: "Be ready to explain employment gaps or career changes with a positive narrative.",
    postedBy: 6,
    postedDate: "2024-10-10",
  },
  {
    id: 11,    shortDescription: "Break down large tasks.",    content: "Break down large assignments into smaller, manageable tasks.",
    postedBy: 7,
    postedDate: "2024-10-11",
  },
  {
    id: 12,    shortDescription: "Take active notes.",    content: "Active note-taking during lectures enhances retention.",
    postedBy: 8,
    postedDate: "2024-10-12",
  },
  {
    id: 13,    shortDescription: "Join study groups.",    content: "Join study groups to reinforce learning through discussions.",
    postedBy: 9,
    postedDate: "2024-10-13",
  },
];
