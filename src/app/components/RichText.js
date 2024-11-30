"use client";
import React, { useState } from "react";
import Link from "next/link";

const RichText = () => {
  // State variables to track expanded items
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [expandedSubcategory, setExpandedSubcategory] = useState({});
  const [expandedClient, setExpandedClient] = useState({});

  // Toggle functions
  const toggleCategory = (categoryName) => {
    setExpandedCategory((prev) =>
      prev === categoryName ? null : categoryName
    );
    // Reset subcategories and clients when a new category is expanded
    setExpandedSubcategory({});
    setExpandedClient({});
  };

  const toggleSubcategory = (categoryName, subcategoryName) => {
    setExpandedSubcategory((prev) => ({
      ...prev,
      [categoryName]:
        prev[categoryName] === subcategoryName ? null : subcategoryName,
    }));
    // Reset clients when a new subcategory is expanded
    setExpandedClient((prev) => ({
      ...prev,
      [subcategoryName]: null,
    }));
  };

  const toggleClient = (subcategoryName, clientName) => {
    setExpandedClient((prev) => ({
      ...prev,
      [subcategoryName]:
        prev[subcategoryName] === clientName ? null : clientName,
    }));
  };

  // Updated clientsData without "Currently" and with the new client directly under "Technical"
  const clientsData = [
    {
      category: "Technical",
      clients: [
        {
          name: "Solutions Engineer @ Coveo [TSX: CVO]",
          link: "https://www.coveo.com/",
          technologies: [
            "LLMs",
            "Technical Solution Design",
            "Javascript",
            "Python",
          ], // Updated Technologies
        },
      ],
      subcategories: [
        {
          name: "Web Development",
          clients: [
            {
              name: "RBC Royal Bank",
              link: "https://www.rbcroyalbank.com/",
              technologies: ["Next.js", "TypeScript"], // Updated Technologies
            },
            {
              name: "IGM Financial",
              link: "https://www.igmfinancial.com/",
              technologies: ["AEM", "React", "Contentful"], // Updated Technologies
            },
            {
              name: "Pernod Ricard",
              link: "https://www.pernod-ricard.com/",
              technologies: ["Wordpress", "Javascript"], // Updated Technologies
            },
            {
              name: "Guardant Health",
              link: "https://guardanthealth.com/",
              technologies: ["Angular.js", "Contentful"], // Updated Technologies
            },
          ],
        },
        {
          name: "Ecommerce",
          clients: [
            {
              name: "Staples",
              link: "https://www.staples.ca/",
              technologies: ["Shopify Plus", "Next.js", "Contentful"], // Updated Technologies
            },
            {
              name: "Lost and Found",
              link: "https://shoplostfound.com/?srsltid=AfmBOooNiljsjap-I_u_kIij767c8j8AWva1VzxpgZzAG7rHFgKBb-a8",
              technologies: ["Shopify, Liquid, Javascript"],
            },
            {
              name: "Neema Naz",
              link: "https://www.instagram.com/neemanaz/?hl=en",
              technologies: ["Shopify, Liquid"],
            },
            {
              name: "Marcus Troy",
              link: "https://www.instagram.com/marcustroy/",
              technologies: ["Shopify, Liquid"],
            },
            {
              name: "Swoosh God",
              link: "https://www.instagram.com/swooshgod/?hl=en",
              technologies: ["Shopify", "Cargo"],
            },
          ],
        },
        {
          name: "Product",
          clients: [
            {
              name: "Instacard.ai",
              link: "https://www.instacard.ai/",
              technologies: ["OpenAI", "Next.js", "AWS"],
            },
          ],
        },
      ],
    },
    {
      category: "Creative",
      subcategories: [
        {
          name: "Photography",
          clients: [
            {
              name: "City",
              link: "/photography/cityscape",
            },
            {
              name: "Concert",
              link: "/photography/concert",
            },
            {
              name: "Outside",
              link: "/photography/outside",
            },
            {
              name: "Other",
              link: "/photography/other",
            },
          ],
        },
        {
          name: "Book",
          clients: [
            {
              name: "Do Androids Dream of Synthetic Images?",
              link: "/art/sheep/sheePDF.pdf",
              technologies: ["Sony a7", "Midjourney", "Writing"],
            },
          ],
        },
        {
          name: "NFT",
          clients: [
            {
              name: "Zora",
              link: "https://zora.co/@alanhg",
              technologies: ["Multimedia", "Web3"],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div
      style={{
        padding: "1rem",
        boxSizing: "border-box",
        overflowX: "hidden", // Prevent horizontal overflow
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          textAlign: "left",
          wordBreak: "break-word",
          boxSizing: "border-box",
        }}
      >
        <p>
          This site exists in the <em>spirit</em> of &quot;
          <Link
            href="https://youtu.be/kYfNvmF0Bqw?t=53"
            rel="noopener noreferrer"
            target="_blank"
          >
            poking the world
          </Link>
          &quot;:
        </p>
        <ul style={{ paddingLeft: "1rem", listStyleType: "none" }}>
          {clientsData.map((category, idx) => (
            <li
              key={idx}
              style={{ marginTop: "1rem", wordBreak: "break-word" }}
            >
              <span
                onClick={() => toggleCategory(category.category)}
                style={{
                  cursor: "pointer",
                  fontWeight:
                    expandedCategory === category.category ? 800 : 400, // 800 for active, 400 for inactive
                }}
                aria-expanded={expandedCategory === category.category}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    toggleCategory(category.category);
                  }
                }}
              >
                <span style={{ width: "1em", display: "inline-block" }}>
                  {expandedCategory === category.category ? "▾" : "▸"}
                </span>{" "}
                {category.category}
              </span>
              {expandedCategory === category.category && (
                <ul style={{ paddingLeft: "1rem", listStyleType: "none" }}>
                  {/* Render clients directly under the category, if any */}
                  {category.clients && category.clients.length > 0 && (
                    <li style={{ marginTop: "0.5rem" }}>
                      {category.clients.map((client, clientIdx) => (
                        <div key={clientIdx} style={{ marginBottom: "0.5rem" }}>
                          <span
                            onClick={() =>
                              toggleClient(
                                `${category.category}-direct`,
                                client.name
                              )
                            }
                            style={{
                              cursor: "pointer",
                              fontWeight:
                                expandedClient[
                                  `${category.category}-direct`
                                ] === client.name
                                  ? 800 // Active
                                  : 400, // Inactive
                            }}
                            aria-expanded={
                              expandedClient[`${category.category}-direct`] ===
                              client.name
                            }
                            role="button"
                            tabIndex={0}
                            onKeyPress={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                toggleClient(
                                  `${category.category}-direct`,
                                  client.name
                                );
                              }
                            }}
                          >
                            <span
                              style={{ width: "1em", display: "inline-block" }}
                            >
                              {expandedClient[`${category.category}-direct`] ===
                              client.name
                                ? "▾"
                                : "▸"}
                            </span>{" "}
                            {client.name}
                          </span>
                          {expandedClient[`${category.category}-direct`] ===
                            client.name && (
                            <ul
                              style={{
                                listStyleType: "disc",
                                paddingLeft: "1.5rem",
                                marginTop: "0.5rem",
                                wordBreak: "break-word",
                                overflowWrap: "break-word",
                              }}
                            >
                              {client.technologies && (
                                <li style={{ fontWeight: 800 }}>
                                  Technologies:
                                  <ul
                                    style={{
                                      listStyleType: "circle",
                                      marginLeft: "1rem",
                                      wordBreak: "break-word",
                                      overflowWrap: "break-word",
                                    }}
                                  >
                                    {client.technologies.map(
                                      (tech, techIdx) => (
                                        <li
                                          key={techIdx}
                                          style={{ fontWeight: 800 }}
                                        >
                                          {tech}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </li>
                              )}
                              <li>
                                <Link
                                  href={client.link}
                                  rel="noopener noreferrer"
                                  target="_blank"
                                  style={{
                                    wordBreak: "break-word",
                                    overflowWrap: "break-word",
                                    fontWeight: 800, // Changed from 400 to 800
                                  }}
                                >
                                  Visit Website
                                </Link>
                              </li>
                            </ul>
                          )}
                        </div>
                      ))}
                    </li>
                  )}

                  {/* Render subcategories */}
                  {category.subcategories.map((subcategory, subIdx) => (
                    <li key={subIdx} style={{ marginTop: "0.5rem" }}>
                      <span
                        onClick={() =>
                          toggleSubcategory(category.category, subcategory.name)
                        }
                        style={{
                          cursor: "pointer",
                          fontWeight:
                            expandedSubcategory[category.category] ===
                            subcategory.name
                              ? 800
                              : 400, // 800 for active, 400 for inactive
                        }}
                        aria-expanded={
                          expandedSubcategory[category.category] ===
                          subcategory.name
                        }
                        role="button"
                        tabIndex={0}
                        onKeyPress={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            toggleSubcategory(
                              category.category,
                              subcategory.name
                            );
                          }
                        }}
                      >
                        <span style={{ width: "1em", display: "inline-block" }}>
                          {expandedSubcategory[category.category] ===
                          subcategory.name
                            ? "▾"
                            : "▸"}
                        </span>{" "}
                        {subcategory.name}
                      </span>
                      {expandedSubcategory[category.category] ===
                        subcategory.name && (
                        <ul
                          style={{
                            paddingLeft: "1.5rem",
                            listStyleType: "none",
                            marginTop: "0.5rem",
                          }}
                        >
                          {subcategory.name === "Photography" ? (
                            <ul style={{ listStyleType: "disc" }}>
                              {subcategory.clients.map((client, clientIdx) => (
                                <li
                                  key={clientIdx}
                                  style={{
                                    wordBreak: "break-word",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  <Link
                                    href={client.link}
                                    prefetch={true}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                      wordBreak: "break-word",
                                      overflowWrap: "break-word",
                                      fontWeight: 800, // Changed from 400 to 800
                                    }}
                                  >
                                    {client.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            subcategory.clients.map((client, clientIdx) => (
                              <li
                                key={clientIdx}
                                style={{
                                  wordBreak: "break-word",
                                  marginBottom: "0.5rem",
                                }}
                              >
                                <span
                                  onClick={() =>
                                    toggleClient(subcategory.name, client.name)
                                  }
                                  style={{
                                    cursor: "pointer",
                                    fontWeight:
                                      expandedClient[subcategory.name] ===
                                      client.name
                                        ? 800 // Active
                                        : 400, // Inactive
                                  }}
                                  aria-expanded={
                                    expandedClient[subcategory.name] ===
                                    client.name
                                  }
                                  role="button"
                                  tabIndex={0}
                                  onKeyPress={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                      toggleClient(
                                        subcategory.name,
                                        client.name
                                      );
                                    }
                                  }}
                                >
                                  <span
                                    style={{
                                      width: "1em",
                                      display: "inline-block",
                                    }}
                                  >
                                    {expandedClient[subcategory.name] ===
                                    client.name
                                      ? "▾"
                                      : "▸"}
                                  </span>{" "}
                                  {client.name}
                                </span>
                                {expandedClient[subcategory.name] ===
                                  client.name && (
                                  <ul
                                    style={{
                                      listStyleType: "disc",
                                      paddingLeft: "1.5rem",
                                      marginTop: "0.5rem",
                                      wordBreak: "break-word",
                                      overflowWrap: "break-word",
                                    }}
                                  >
                                    {client.technologies && (
                                      <li style={{ fontWeight: 800 }}>
                                        Technologies:
                                        <ul
                                          style={{
                                            listStyleType: "circle",
                                            marginLeft: "1rem",
                                            wordBreak: "break-word",
                                            overflowWrap: "break-word",
                                          }}
                                        >
                                          {client.technologies.map(
                                            (tech, techIdx) => (
                                              <li
                                                key={techIdx}
                                                style={{ fontWeight: 800 }}
                                              >
                                                {tech}
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </li>
                                    )}
                                    <li>
                                      <Link
                                        href={client.link}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        style={{
                                          wordBreak: "break-word",
                                          overflowWrap: "break-word",
                                          fontWeight: 800, // Changed from 400 to 800
                                        }}
                                      >
                                        Visit Website
                                      </Link>
                                    </li>
                                  </ul>
                                )}
                              </li>
                            ))
                          )}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <p style={{ marginTop: "1rem" }}>
          <Link
            href="https://www.dont-panic.cc/capi/wp-content/uploads/2018/02/40110298232_4e9c412936_o.jpg"
            rel="noopener noreferrer"
            target="_blank"
            style={{ fontWeight: 400 }} // Preserving existing style
          >
            &quot;DON&apos;T PANIC&quot;
          </Link>
          , <br /> Alan{" "}
        </p>
      </div>
    </div>
  );
};

export default RichText;
