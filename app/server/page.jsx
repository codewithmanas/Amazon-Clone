const Userpage = (props) => {
    console.log('Props:', props);
    return (
        <div>
            <h1>User (SSR)</h1>
        </div>
    )
};

// Thought Note: Understanding Server Side Data Fetching in Page Router
// But I want to learn for App Router

export const getServerSideProps = async () => {
    console.log('A task is going on in server');

    return {props:{
        name: "Manas",
      },
    };
};


export default Userpage;