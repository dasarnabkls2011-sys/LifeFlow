function FocusToast({ show, minutes }) {

    if (!show) return null;
  
    return (
  
      <div className="focus-toast">
  
        <div className="toast-icon">
          🎉
        </div>
  
        <div>
  
          <h3>Session Complete!</h3>
  
          <p>
  Great job! You focused for {minutes}.
</p>
        </div>
  
      </div>
  
    );
  
  }
  
  export default FocusToast;