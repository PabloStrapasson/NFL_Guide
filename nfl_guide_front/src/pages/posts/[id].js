import TopPage from "@/components/TopPage"
import Footer from "@/components/Footer"
import TeamContent from "@/components/TeamContent"

export async function getStaticPaths() {
    const response = await fetch("http://localhost:5000/teams")
    const team_list = await response.json()
    const paths = team_list.map((team) => {
        return { params: { id: `${team.keyword}` }}
    })

    return {
        paths: paths,
        fallback: false,
    }
  }
   
  export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:5000/teams/search?keyword=${params.id}`)
    const team_data = await res.json()
   
    return { props: { team_data } }
  }

export default function Post({ team_data }) {
    
  return (
    <div>
      {team_data.map((team) => ( 
        <TopPage keyword={team.keyword} logo_href="/"/>
      ))}
      <div className="main_content">
        <div>
          {team_data.map((team) => ( 
            <TeamContent team_name={team.name} team_city={team.city} team_superbowls={team.superbowl} team_description={team.description}/>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}