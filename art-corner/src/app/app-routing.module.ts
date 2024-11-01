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

const routes: Routes = [
  { path: 'home', component: IndexPageComponent, data: {page: 'home', artifacts: initialArtifacts}},
  { path: 'index', component: IndexPageComponent, data: {page: 'home'}},
  { path: 'explore', component: ExploreComponentsComponent, data: {page: 'explore', artifacts: initialArtifacts} },
  { path: 'explore/:id', component: EducationalResourcesComponent, data: {page: 'explore', artifacts: initialArtifacts, list: initialArtifacts, navActive: true} },
  { path: 'bookmarks', component: AccessibilityFeaturesComponent, data: {page: 'explore', artifacts: initialArtifacts} },
  { path: 'bookmarks/:id', component: EducationalResourcesComponent, data: {page: 'explore', artifacts: initialArtifacts, list: initialArtifacts, navActive: false} },
  { path: 'community', component: CommunityForumComponent },
  { path: 'about', component: FeedbackAboutUsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
