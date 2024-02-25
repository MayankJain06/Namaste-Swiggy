// Footer component for footer section
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By
        <i className="fa-solid fa-heart"></i>
        <a
          href="https://www.linkedin.com/in/mayank-jain-833912157/"
          target="_blank"
          title="Mayank Jain's Linkedin Profile"
        >
          Mayank Jain
        </a>
        <i className="fa-solid fa-copyright"></i>
          {year}
          <strong>
            Food<span>Fire</span>
          </strong>
      </div>
    );
  };
  
  export default Footer;