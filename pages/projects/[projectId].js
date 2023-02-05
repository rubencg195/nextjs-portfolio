import { useRouter } from 'next/router'

const ProjectPage = () => {
    const router    = useRouter()
    const projectId = router.query.projectId;
    if(projectId)
        return <>Project {projectId.toUpperCase()} Page</>
    return <>Loading</>
}

export default ProjectPage;