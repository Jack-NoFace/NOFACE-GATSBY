import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../layout";
import config from "../../data/SiteConfig";

import Header from "../components/organisms/header";
import Hero from "../components/organisms/hero";
import SEO from "../components/SEO/SEO";

export default ({ data }) => (
	<Layout>
		<div className="index-container">
			<Helmet title={config.siteTitle} />
			<SEO />
			<Header />
			<Hero />
			<section className="section section--description">
				<div className="section--description__before" />
				<div className="section--description__after" />
				<div className="section__content">
					<h2>What is NoFace?</h2>
					<p>
						NoFace is a design agency focused solely on helping local businesses
						define their identities, and form a holistic brand that will
						represent their message.
					</p>
					<p>
						We don’t normally work with large and established companies and
						businesses. NoFace works exclusively with small and startup
						businesses in the local area.
					</p>
					<p>
						We are aware the industry is forever changing, we don’t give fixed
						advice to our customers.
						<span className="bold">
							Every business is unique, and as such we will treat it so.
						</span>
					</p>
				</div>
			</section>
		</div>
	</Layout>
);