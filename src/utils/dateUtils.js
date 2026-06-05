// Simple Gregorian date calculator for stopwatch

export function calculateDaysElapsed(startDateString) {
  // Parse Gregorian date format YYYY-MM-DD
  const [year, month, day] = startDateString.split('-').map(Number);
  
  // Create start date (using UTC to avoid timezone issues)
  const startDate = new Date(Date.UTC(year, month - 1, day));
  
  // Get current date
  const now = new Date();
  
  // Calculate difference in milliseconds
  const diffMs = now - startDate;
  
  // Convert to days
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  return days;
}

export function formatDaysToTime(days) {
  if (days < 0) return '0 days';
  
  const years = Math.floor(days / 365.25);
  const remainingAfterYears = days % 365.25;
  const months = Math.floor(remainingAfterYears / 30.44);
  const remainingDays = Math.floor(remainingAfterYears % 30.44);
  
  let result = '';
  if (years > 0) result += `${years} year${years > 1 ? 's' : ''} `;
  if (months > 0) result += `${months} month${months > 1 ? 's' : ''} `;
  if (remainingDays > 0 || !result) result += `${remainingDays} day${remainingDays !== 1 ? 's' : ''}`;
  
  return result.trim();
}
