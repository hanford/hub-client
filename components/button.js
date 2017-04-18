
export const Button = ({ title }) => (
  <div>
    <button className='button'>{title ? title : 'Submit'}</button>
    <style jsx>{`
      .button {
        background: linear-gradient(to right, #ff512f, #f09819);
        border: 0px;
        box-shadow: 0 0 0.4rem rgba(0,0,0,.14), 0 0.4rem 0.8rem rgba(0,0,0,.25);
        cursor: pointer;
        align-items: center;
        justify-content: center;
        font-size: 2.4rem;
        min-width: 15rem;
        text-align: center;
        font-weight: 600;
        transition: all 0.2s linear;
        color: white;
        padding: 1rem;
        border-radius: 0.4rem;
        outline: none;
      }

      .button:active {
        transform: scale(0.9);
      }
    `}</style>
  </div>
)
