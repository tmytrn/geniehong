import { getClient } from "../lib/sanity";
import * as queries from "./queries";

export const getMetaData = async () => {
  const data = await getClient().fetch(queries.metaData);
  return data;
};

export const getHomeData = async () => {
  const data = await getClient().fetch(queries.siteQuery);
  return data;
};

export const getPortfolioData = async () => {
  const data = await getClient().fetch(queries.portfolioQuery);
  return data;
};

export const getProjectsData = async () => {
  const data = await getClient().fetch(queries.projectsQuery);
  return data;
};

export const getPortfolioPass = async () => {
  const data = await getClient().fetch(queries.portfolioPass);
  return data;
};
export { queries };
