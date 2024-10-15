'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button className='col-md-4 col-sm-12 col-lg-3 me-2 bg-pink-500'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        
        Try again
        
      </button>
    </div>
  )
}