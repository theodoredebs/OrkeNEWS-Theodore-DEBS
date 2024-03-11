import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import the jest-dom extension for additional matchers
import NewsCard from "./NewsCard";

// Mock data for testing
const mockNewsData = {
  source: {
    id: "sourceId",
    name: "Source Name",
  },
  author: "John Doe",
  title: "Test News Title",
  description: "Test News Description",
  url: "https://example.com/test-news",
  urlToImage: "https://example.com/test-image.jpg",
  publishedAt: "2022-01-01T12:34:56Z",
  content: "Test news content.",
};

describe("NewsCard", () => {
  it("renders NewsCard component with mock data", () => {
    render(<NewsCard {...mockNewsData} />);

    // Check if the title, description, and "Read More" button are rendered
    expect(screen.getByText("Test News Title")).toBeInTheDocument();
    expect(screen.getByText("Test News Description")).toBeInTheDocument();
    expect(screen.getByText("Read More")).toBeInTheDocument();

    // Check if the source, author, and publishedAt information are rendered
    expect(screen.getByText("Source: Source Name")).toBeInTheDocument();
    expect(screen.getByText("By John Doe")).toBeInTheDocument();
    expect(screen.getByText(/ago/i)).toBeInTheDocument();

    // Ensure the image is rendered with the correct alt text
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "src",
      "https://example.com/test-image.jpg"
    );
    expect(imageElement).toHaveAttribute("alt", "Test News Title");
  });
});
