import Repository from "../../components/Repository"

export const Page = (props) => {
  const {repository, error, name, owner} = props
    return <Repository  
      ssrRepository={repository}
      error={error} 
      match={{
        params: {
          repoName:name, repoOwner:owner
        }
      }} 
      user={{login: false}} />
}

export default Page