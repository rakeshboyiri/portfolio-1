const Contact = () => {
    return (
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact</h2>
          <div className="max-w-md mx-auto bg-gray-700 rounded-lg p-6 shadow-lg">
            <p className="mb-4">
              <strong>Email:</strong> <a href="mailto:boyirirakesh@gmail.com" className="text-blue-400 hover:underline">boyirirakesh@gmail.com</a>
            </p>
            <p className="mb-4">
              <strong>Phone:</strong> +91 8977244642
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">LinkedIn</a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>
              <a href="https://auth.geeksforgeeks.org/user/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GeeksforGeeks</a>
              <a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">LeetCode</a>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Contact
  
  