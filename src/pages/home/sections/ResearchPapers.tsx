// src/ResearchPapers.tsx

import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface ResearchPaper {
  title: string;
  link: string;
  shortDescription: string;
}

const researchPapers: ResearchPaper[] = [
  {
    title: "Research Paper 1",
    link: "https://example.com/research-paper-1",
    shortDescription: `optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit`,
  },
  {
    title: "Research Paper 2",
    link: "https://example.com/research-paper-2",
    shortDescription: `optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit`,
  },
  // Add more research papers as needed
];


const ResearchPapers: React.FC = () => {
  return (
    <>
      <Stack spacing="4">
        {researchPapers.map((paper) => (
          <Card key={paper.title}>
            <CardHeader>
              <Heading size="md">
                <Link to={paper.link} color="blue.500" className="underline">
                  {paper.title}
                </Link>
              </Heading>
            </CardHeader>
            <CardBody>
              <Text>paper = {paper.shortDescription}</Text>
            </CardBody>
          </Card>
        ))}
      </Stack>
    </>
  );
};

export default ResearchPapers;

