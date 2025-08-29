import { useState } from 'react';
import {getPaywallHtml} from 'x402/shared';

const Home = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
      const [paywall, setPaywall] = useState(null);
      const [selectedAmount, setSelectedAmount] = useState(null);
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [submitMessage, setSubmitMessage] = useState('');
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
    
      const handleSubmit = async (amount) => {
        if (!formData.name || !formData.email) {
          setSubmitMessage('Name and Email are required!');
          return;
        }
    
        setIsSubmitting(true);
        setSubmitMessage('');
    
        try {
          const endpoint = `/${amount}-dollar`;
          const queryParams = new URLSearchParams({
            amount: amount,
            name: formData.name,
            identifier: formData.email,
            ...(formData.message && { message: formData.message })
          });

            const response = await fetch(`http://localhost:4021/${selectedAmount}-dollar`);
            
            const data = await response.json();
            
            const paywallHTML = getPaywallHtml(
              {
                amount: amount,
                paymentRequirements: JSON.stringify(data.accepts[0]),
                currentUrl: 'http://localhost:3000',
                testnet: 'base-sepolia',
                appName: 'StreamLabs',
                appLogo: 'https://streamlabs.com/favicon.ico',
            });
            console.log(paywallHTML);
            setPaywall(paywallHTML);
          
          // send post request with X-payment header
           
          
          // if (response.ok) {
          //   setSubmitMessage(`Success! ${data.message}`);
          //   setFormData({ name: '', email: '', message: '' });
          //   setSelectedAmount(null);
          // } else {
          //   setSubmitMessage(`Error: ${data.message}`);
          // }
        } catch (error) {
          console.log(error);
          setSubmitMessage('Error connecting to server. Please try again.');
        } finally {
          setIsSubmitting(false);
        }
      };
    
      const dollarAmounts = [1, 5, 10, 20, 50, 100];
    
      return (
        paywall ? (
          <div dangerouslySetInnerHTML={{ __html: paywall }} />
        ) : (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 p-5">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
            <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-10 text-center">
              <h1 className="text-4xl font-bold mb-3">Welcome to StreamLabs</h1>
              <p className="text-xl opacity-90">Support your favorite creators with a donation</p>
            </header>
    
            <form className="p-10" onSubmit={(e) => e.preventDefault()}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                />
              </div>
    
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                />
                <small className="text-gray-500 text-sm mt-1 block">This will be used as your identifier</small>
              </div>
    
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Leave a message (optional)"
                  rows="3"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 resize-none"
                />
              </div>
    
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">Select Donation Amount:</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {dollarAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className={`py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                        selectedAmount === amount
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                          : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50'
                      }`}
                      onClick={() => setSelectedAmount(amount)}
                      disabled={isSubmitting}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
              </div>
    
              {selectedAmount && (
                <div className="text-center">
                  <button
                    type="button"
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    onClick={() => handleSubmit(selectedAmount)}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : `Donate $${selectedAmount}`}
                  </button>
                </div>
              )}
    
              {submitMessage && (
                <div className={`mt-6 p-4 rounded-xl text-center font-medium ${
                  submitMessage.includes('Error') 
                    ? 'bg-red-100 text-red-800 border border-red-200' 
                    : 'bg-green-100 text-green-800 border border-green-200'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>)
    )
}

export default Home;