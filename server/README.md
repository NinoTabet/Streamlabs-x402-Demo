# Merchant Payment Website

A modern, responsive React-based website that allows customers to submit payment forms with dynamic pricing through x402 payment middleware.

## Features

- **React Frontend**: Modern, component-based UI with TypeScript
- **Dynamic Pricing**: Frontend sets payment amounts dynamically
- **Form Collection**: Collects name, email, message, and payment amount
- **Real-time Validation**: Form validation with visual feedback
- **Payment Processing**: Integrated with x402 payment system
- **Mobile Responsive**: Works perfectly on all device sizes

## Project Structure

```
merchant/
├── src/                    # React frontend source
│   ├── components/         # React components
│   │   └── PaymentForm.tsx # Main payment form component
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # React entry point
│   ├── index.css          # Global styles
│   └── App.css            # App component styles
├── index.ts               # Express server with x402 middleware
├── index.html             # HTML template for React app
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript config for frontend
├── tsconfig.node.json     # TypeScript config for backend
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   FACILITATOR_URL=your_facilitator_url_here
   ADDRESS=your_wallet_address_here
   ```

3. **Run the Backend Server**
   ```bash
   npm start
   # or
   npx tsx index.ts
   ```

4. **Run the React Frontend (in a new terminal)**
   ```bash
   npm run frontend
   ```

5. **Access the Website**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:4021`

## Development

### Frontend Development
- **Start dev server**: `npm run frontend`
- **Build for production**: `npm run frontend:build`
- **Preview production build**: `npm run frontend:preview`

### Backend Development
- **Start server**: `npm start`
- **Watch mode**: `npm run dev`
- **Type check**: `npm run type-check`

## How It Works

### Frontend (React)
1. **PaymentForm Component**: Handles form state and validation
2. **Dynamic Pricing**: Sends amount to `/api/donate` to set price
3. **Form Submission**: Submits data to `/api/submit-payment`
4. **Real-time Updates**: Shows status messages and form validation

### Backend (Express + x402)
1. **API Routes**: Handle form submissions and pricing
2. **x402 Middleware**: Processes payments through your payment system
3. **Dynamic Pricing**: Updates payment amounts based on frontend input
4. **Form Logging**: Records all payment submissions

## API Endpoints

- `GET /api/donate?amount=X` - Set dynamic payment amount
- `POST /api/submit-payment` - Submit payment form data
- `GET /` - Serve React application

## Customization

### Styling
- Modify `src/components/PaymentForm.css` for form styling
- Update `src/index.css` for global styles
- Use CSS custom properties for easy theming

### Form Fields
- Add/remove fields in `src/components/PaymentForm.tsx`
- Update validation logic in the component
- Modify server-side processing in `index.ts`

### Payment Integration
- The form is ready for integration with payment processors
- Modify the API endpoints to handle your payment logic
- Add database storage for form submissions

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **React 18+**: Uses latest React features and hooks
- **Mobile**: Responsive design works on all mobile devices

## Security Features

- **Input Validation**: Client and server-side validation
- **API Routes**: Secure API endpoints with proper validation
- **Error Handling**: Graceful error handling and user feedback
- **TypeScript**: Type-safe development and runtime safety

## Development Workflow

1. **Frontend Changes**: Edit files in `src/` directory
2. **Backend Changes**: Modify `index.ts` for new routes and logic
3. **Styling**: Update CSS files for visual changes
4. **Testing**: Use Vite dev server for hot reloading

## Troubleshooting

### Common Issues
1. **Frontend not loading**: Ensure Vite dev server is running
2. **API calls failing**: Check backend server is running on port 4021
3. **Build errors**: Verify TypeScript configuration and dependencies

### Debug Mode
- Check browser console for frontend errors
- Monitor server console for backend logs
- Use React DevTools for component debugging

## License

This project is open source and available under the MIT License.

## Support

For issues or questions:
1. Check the browser console for frontend errors
2. Verify your environment variables are set correctly
3. Ensure both frontend and backend servers are running
4. Check TypeScript configuration for build issues
