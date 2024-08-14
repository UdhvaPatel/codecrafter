export default function LandingSection1(){
    return(
        <>
        <div style={{ padding: '1px 0', textAlign: 'center' }}>
      
      <div
        style={{
          transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
          transformStyle: 'preserve-3d',
          opacity: 1,
        }}
      >
        <div style={{ paddingTop: '1px' }}>
          <div
            style={{
              transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              opacity: 1,
              background: '#111827',
              padding: '2rem',
              marginBottom: '2rem',
            }}
          >
            <div style={{ maxWidth: '960px', margin: '0 auto' }}>
              <div style={{ fontSize: '35px', fontWeight: 'bold', marginBottom: '1rem', color: '#f15152' }}>Your Personal AI&nbsp;Tutor</div>
              <div style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#f15152',  }}>
                With Arno, you can instantly receive high quality feedback.
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', flexDirection: 'row-reverse' , backgroundImage: 'url(https://cdn.prod.website-files.com/63c0be580d96685e62d301ce/6595ad8292a6fb2a71b432fb_pink.png)',
        backgroundPosition: '100% 0',
        backgroundSize: 'cover',
        backgroundAttachment: 'scroll',
        borderRadius: '20px',
        paddingTop: '100px',
        paddingBottom: '100px',
        paddingLeft: '50px' }}>
              <div>
                <img
                  src="./conversation.png"
                  loading="lazy"
                  sizes="(max-width: 991px) 100vw, 38vw"
                  alt=""
                  style={{ width: '100%', height: '100%', borderRadius: '15px' }}
                />
              </div>
              <div style={{ alignContent:'center', textAlign:'left', color:'white'}}>
                <div style={{  padding: '50px' , alignItems:'left', alignContent:'center'}}>
                  <h2 style={{ fontSize: '27px', marginBottom: '1rem', fontWeight:'bolder' }}>Accurate scoring and personalized feedback</h2>
                  <div style={{ fontSize: '15px', marginBottom: '2rem', fontWeight:'lighter' }}>
                    Arno instantly scores your responses using the same guidelines that Duolingo uses in the actual exam.
                    You'll also get personalized feedback that will boost your scores immediately.
                  </div>
                  <a
                    id="try-arno-hero-cta-item-1"
                    href="https://duolingo.goarno.io"
                    target="_blank"
                    style={{
                      display: 'inline-block',
                      padding: '0.5rem 1.5rem',
                      fontSize: '1rem',
                      color: '#fff',
                      backgroundColor: '#007BFF',
                      borderRadius: '25px',
                      textDecoration: 'none',
                      borderColor:'whitesmoke',
                      borderWidth:'3px',
                      boxShadow:'1px 1px 10px white'
                    }}
                  >
                    Try Arno Now
                  </a>
                </div>
              </div>
              {/* <div>
                <img
                  src="https://cdn.prod.website-files.com/63c0be580d96685e62d301ce/65953830d643790ae7cc2358_Screenshot%202024-01-03%20at%207.32.38%20PM.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 57vw, (max-width: 991px) 60vw, 100vw"
                  srcSet="https://cdn.prod.website-files.com/63c0be580d96685e62d301ce/65953830d643790ae7cc2358_Screenshot%202024-01-03%20at%207.32.38%20PM-p-500.png 500w, https://cdn.prod.website-files.com/63c0be580d96685e62d301ce/65953830d643790ae7cc2358_Screenshot%202024-01-03%20at%207.32.38%20PM-p-800.png 800w, https://cdn.prod.website-files.com/63c0be580d96685e62d301ce/65953830d643790ae7cc2358_Screenshot%202024-01-03%20at%207.32.38%20PM-p-1080.png 1080w, https://cdn.prod.website-files.com/63c0be580d96685e62d301ce/65953830d643790ae7cc2358_Screenshot%202024-01-03%20at%207.32.38%20PM.png 1376w"
                  alt=""
                  style={{ width: '100%', height: 'auto' }}
                />
              </div> */}
            </div>
          </div>


          {/* section 2 */}
        
        </div>
      </div>
    </div>
    </>
    )
}