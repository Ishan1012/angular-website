import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './art-gallery/index-page/index-page.component';
import { ExploreComponentsComponent } from './art-gallery/explore-components/explore-components.component';
import { AccessibilityFeaturesComponent } from './accessibility-features/accessibility-features.component';
import { CommunityForumComponent } from './community-forum/community-forum.component';
import { FeedbackAboutUsComponent } from './feedback-about-us/feedback-about-us.component';
import { EducationalResourcesComponent } from './educational-resources/educational-resources.component';
import { GeneralCommunityPageComponent } from './community-forum/general-community-page/general-community-page.component';
import { ArtistsProfilesComponent } from './artists-profiles/artists-profiles.component';
import { UserLoginDashboardComponent } from './artists-profiles/user-login-dashboard/user-login-dashboard.component';
import { CommunityDescriptionComponent } from './community-forum/community-description/community-description.component';
import { ArtifactsService } from './services/artifacts.service';
import { ErrorPageComponent } from './accessibility-features/error-page/error-page.component';

const routes: Routes = [
  { path: 'index', component: IndexPageComponent},
  { path: 'login', component: ArtistsProfilesComponent},
  { path: 'home', component: UserLoginDashboardComponent},
  { path: 'explore', component: ExploreComponentsComponent},
  { path: 'explore/search/:searchitem', component: ExploreComponentsComponent},
  { path: 'explore/:id', component: EducationalResourcesComponent, data: {navActive: true} },
  { path: 'bookmarks', component: AccessibilityFeaturesComponent},
  { path: 'bookmarks/:id', component: EducationalResourcesComponent, data: {navActive: false} },
  { path: 'community', component: CommunityForumComponent},
  { path: 'community/description/:commid', component: CommunityDescriptionComponent},
  { path: 'community/general-community', component: GeneralCommunityPageComponent},
  { path: 'about', component: FeedbackAboutUsComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
