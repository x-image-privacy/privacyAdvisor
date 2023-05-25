export default () => (
  <main>
    <style
      dangerouslySetInnerHTML={{
        __html: `
              html, body {
                margin: 0;
              }
              html * {
                box-sizing: border-box;
              }
              main {
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
                text-align: center;
                background-color: #E2E8F0;
                height: 100vh;
                flex-direction: column;
              }
              section {
                background-color: white;
                border-radius: 0.25rem;
                width: 32rem;
                padding: 1rem;
                margin: 0 auto;
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
              }
              h1 {
                font-size: 2rem;
                margin: 0;
                font-weight: 500;
                line-height: 1;
                color: #2D3748;
              }
              img {
                margin-bottom: 16px;
              }
              a {
                width: 100%;
                height: 100%;
              }
              .home-link {
                padding: 1rem;
              }
            `,
      }}
    />
    <section>
      <img alt="page not found" src="/assets/page-not-found.svg" />
      <h1>
        <span>404 Page Not Found</span>
      </h1>
    </section>
    <section>
      <a href="/">
        <div className="home-link">Bring be back home</div>
      </a>
    </section>
  </main>
)
