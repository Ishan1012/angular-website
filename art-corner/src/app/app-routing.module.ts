import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './art-gallery/index-page/index-page.component';
import { ExploreComponentsComponent } from './art-gallery/explore-components/explore-components.component';
import { AccessibilityFeaturesComponent } from './accessibility-features/accessibility-features.component';
import { CommunityForumComponent } from './community-forum/community-forum.component';
import { FeedbackAboutUsComponent } from './feedback-about-us/feedback-about-us.component';
import { initialArtifacts } from './data/initialArtifacts';
import { EducationalResourcesComponent } from './educational-resources/educational-resources.component';
import { CreateExplore } from './data/CreateExplore';
import { GeneralCommunityPageComponent } from './community-forum/general-community-page/general-community-page.component';

const routes: Routes = [
  { path: 'home', component: IndexPageComponent, data: {page: 'home', artifacts: initialArtifacts}},
  { path: 'index', component: IndexPageComponent, data: {page: 'home'}},
  { path: 'explore', component: ExploreComponentsComponent, data: {page: 'explore', artifacts: initialArtifacts} },
  { path: 'explore/:id', component: EducationalResourcesComponent, data: {page: 'explore', artifacts: initialArtifacts, list: initialArtifacts, navActive: true} },
  { path: 'bookmarks', component: AccessibilityFeaturesComponent, data: {page: 'bookmarks', artifacts: initialArtifacts} },
  { path: 'bookmarks/:id', component: EducationalResourcesComponent, data: {page: 'bookmarks', artifacts: initialArtifacts, list: initialArtifacts, navActive: false} },
  { path: 'community', component: CommunityForumComponent, data: {page: 'community'} },
  { path: 'community-general', component: GeneralCommunityPageComponent, data: {page: 'community', artifacts: initialArtifacts} },
  { path: 'about', component: FeedbackAboutUsComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', redirectTo: '/index' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
