import type { Route } from "./+types/home";
import Navbar from "~/components/navbar";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {Link, useNavigate} from "react-router";
import {useEffect, useState} from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeInsight" },
    { name: "description", content: "AI-powered resume review to boost your job chances" },
  ];
}

export default function Home() {
    const { auth , isLoading } = usePuterStore();
    const navigate = useNavigate();
    ;

    useEffect(() => {
        if(isLoading) return;
        if(!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated, isLoading])



  return (
      <>
        <main className="bg-[url('/images/bg-main.svg')] bg-cover">
            <Navbar />
          <section className="main-section">
            <div className="page-heading py-16">
              <h1>Track your Applications & Resume Ratings</h1>
              <h2>Review your submissions and check AI-powered feedback</h2>
            </div>

            {resumes.length > 0 && (
                <div className="resumes-section">
          {resumes.map((resume) => (
      <ResumeCard key={resume.id} resume={resume}></ResumeCard>
          ))}
                </div>
            )}
          </section>
        </main>
      </>
  );
}