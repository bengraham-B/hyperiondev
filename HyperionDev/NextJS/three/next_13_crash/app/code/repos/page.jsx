import React from 'react'
import Link from 'next/link'
import {FaStar, FaCodeBranch, FaEye} from "react-icons/fa"
import { resolve } from 'styled-jsx/css'

async function fetchRepos(){
	const response = await fetch("https://api.github.com/users/bengraham-B/repos")
	await new Promise((resolve) => setTimeout(resolve, 1000))
	const repos =  await response.json()
	return repos
}

export default async function CodePage() {
	const repos = await fetchRepos()
  return (
    <div className="repo-container">
		<h2>Repoositories</h2>
		<ul className="repo-list">
			{repos.map((repo) => (
				<li key={repo.id}>
					<Link href={`/code/repos/${repo.name}`}>
						<h3>{repo.name}</h3>
						<p>{repo.description}</p>
						<div className="repo-details">
							<span>
								<FaStar/> {repo.stargazers_count}
							</span>
							<span>
								<FaCodeBranch/> {repo.forks_count}
							</span>
							<span>
								<FaEye/> {repo.watchers_count}
							</span>
						</div>
					</Link>
				</li>
			))}
		</ul>
	</div>
  )
}
